# colors
red='\e[1;31m'
grn='\e[1;32m' 
rst='\e[0m'

#banner
echo "${grn}       
    ____  ________________  _   __   _____
   / __ \/ ____/ ____/ __ \/ | / /  /__  /
  / / / / __/ / /   / / / /  |/ /     / / 
 / /_/ / /___/ /___/ /_/ / /|  /     / /  
/_____/_____/\____/\____/_/ |_/     /_/   
                                          
${rst}"

# ask to install
while true; do
    read -p "Do you wish to install? (y/n) " yn
    case $yn in
        [Yy]* ) echo "${grn}... installing${rst}"; break;;
        [Nn]* ) echo "${red}... installation canceled${rst}";exit;;
        * ) echo "Please answer yes or no.";;
    esac
done

# fix locale
if [ "$LC_ALL" = "" ]; then
export LC_ALL=en_GB.UTF-8
fi

if [ "$LANGUAGE" = "" ]; then
export LANGUAGE=en_GB.UTF-8
fi

# installation process
install_dependency () {
    name=$1
    install_command=$2
    if eval "$name --version"
    then
        echo "${grn} ... $name already installed, skipping${rst}"
    else
        echo "${grn} ... install $name ${rst}"
        eval $3
        eval $install_command
    fi
}

install_dependency "node" "sudo apt install nodejs -y" "curl -sSL https://deb.nodesource.com/setup_16.x | sudo bash -"
install_dependency "git" "sudo apt-get install git -y"
install_dependency "pip3" "sudo apt-get install python3-pip -y"
install_dependency "pm2" "sudo npm i -g pm2"
install_dependency "serve" "sudo npm i -g serve"

cd /home/pi
git clone https://github.com/FrancoRosa/pumps-control.git

#install pip3 dependencies
sudo pip3 install flask-cors flask-socketio keyboard

#Setup pm2
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u pi --hp /home/pi
sudo pm2 startup
sudo pm2 serve /home/pi/pumps-control/build 8080 --name 'web'
sudo pm2 start /home/pi/pumps-control/rpi/control.py --name "control" --interpreter python3
sudo pm2 save

pm2 start /home/pi/pumps-control/rpi/update.py --name "update" --interpreter python3
pm2 save

while true; do
    read -p "Do you wish to reboot? (y/n) " yn
    case $yn in
        [Yy]* ) echo "${grn}... rebooting${rst}"; sudo reboot now;break;;
        [Nn]* ) echo "${red}... dont forget to reboot later${rst}";break;;
        * ) echo "Please answer yes or no.";;
    esac
done

echo "${grn}... done${rst}"