from subprocess import check_output
from os import chdir
from time import ctime, sleep

PROJECT_DIR = '/home/pi/pumps-control'
chdir(PROJECT_DIR)
check_output('pwd')
try:
    check_output(['git', 'reset', '--hard'])
    check_output(['git', 'pull', 'origin', 'master'])
    print('...', ctime(), ': successfully updated')
except:
    print('...', ctime(), ': cant reach to repository server')

while True:
    sleep(60)
