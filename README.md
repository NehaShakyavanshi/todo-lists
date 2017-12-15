# todo-lists

### Installation 

```
cd /opt/
git clone https://github.com/NehaShakyavanshi/todo-lists.git
```

### Install require module 

```
npm install
```

### Update DB config

Update mongodb server hostname and password in `config/database.js`

```
module.exports = {
 	url : 'mongodb://node:nodeuser@mongo-server-hostname:27017/password'
}
```

### Startup script 

Copy init script 

```
sudo cp todoapp.conf /etc/init/
```

### Start app 

```
sudo start todoapp
```

### Browse 

You can access app at http://localhost:8080
