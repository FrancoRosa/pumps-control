from subprocess import check_output
from os import chdir

PROJECT_DIR = '/home/pi/pumps-control'
chdir(PROJECT_DIR)
check_output('pwd')
try:
    check_output(['git', 'pull', 'origin', 'master'])
    print('... software updated')
except:
    print('... cant reach to repository server')
