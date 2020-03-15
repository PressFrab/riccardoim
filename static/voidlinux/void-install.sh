#!/bin/bash
# Author: Riccardo Palombo https://riccardo.im
# Source: https://alkusin.net/voidlinux
# Void Linux post-install script

bypass() {
  sudo -v
  while true;
  do
    sudo -n true
    sleep 45
    kill -0 "$$" || exit
  done 2>/dev/null &
}

echo "Starting Void Linux post-install script..."
sleep 3s
	bypass

clear
echo "Updating system and adding repositories..."
sleep 3s
	sudo xbps-install -Syu

clear
echo "Installing packages..."
sleep 3s
	sudo xbps-install -Sy terminus-font nano micro powertop wordgrinder git lm_sensors acpi vsv vpm cpupower htop lf NetworkManager 

clear
echo "Importing files from server..."
sleep 3s
 	cd /tmp/
	wget https://riccardo.im/voidlinux/void-files.tar.xz
	tar Jxvf void-files.tar.xz
	chmod +x void-files/etc/sv/PowerSave/run
	sudo \cp -r void-files/etc/. /etc
	\cp -r void-files/.bashrc ~/
	rm -rf void-files/

clear
echo "Configuring system..."
sleep 3s

#	sudo sed -i "s/--noclear/--noclear\ --skip-login\ --login-options=$USER/g" /etc/sv/agetty-tty1/conf

	sudo rm -f /var/service/agetty-tty{3,4,5,6}
	sudo rm -fr /var/service/dhcpcd
    sudo ln -s /etc/sv/sshd/ /var/service/
	sudo ln -s /etc/sv/PowerSave /var/service/
    sudo ln -s /etc/sv/NetworkManager /var/service
    sudo ln -s /etc/sv/dbus /var/service
    sudo gpasswd -a $USER network
	sudo mkdir /etc/sysctl.d/
	echo 'vm.swappiness=10' | sudo tee /etc/sysctl.d/99-swappiness.conf

clear
read -p "Done! Press ENTER to reboot."
	sudo shutdown -r now