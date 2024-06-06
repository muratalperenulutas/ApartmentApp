const mongoose = require('mongoose');
const connection = require('../config/db.js');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre('save', async function(){
    // Şifreyi hashleyelim
    try {
        var user = this;
        const salt = await bcrypt.genSalt(10);
        const hashpass = await bcrypt.hash(user.password, salt);

        user.password = hashpass;

    } catch (error) {
        throw error;
    }
    
});

userSchema.methods.comparePassword = async function(userPassword) {
    try {
        const isMatch = await bcrypt.compare(userPassword, this.password);
        return isMatch;
    } catch (error) {
        throw error;
    }

}


// UserModel'i oluşturalım
const UserModel = mongoose.model('MyUsersDataBase', userSchema);

// UserModel'i dışa aktaralım
module.exports = UserModel;



// MongoDB'ye bağlanan fonksiyonu tanımlayalım
// Bunun yerine ben direkt db.js'yi çalıştırıyorum
/*const connectToDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://root:Password@mydatabase.bgb3ppk.mongodb.net/?retryWrites=true&w=majority&appName=MyDatabase', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to database');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        throw err;
    }
};
//MongoDB'ye bağlanalım
//connectToDB();
*/
//connection()


// Şema oluşturalım



























/*
//Burada mongoose'yi import ediyoruz, çünkü şema oluşturacağız
const mongoose = require('mongoose')
//db'e bağlanmak için db'yi import ediyoruz,
const connection = require('../config/db.js')
//Schemayı mongoose'ye atayarak özelliklerini alıyoruz
const {Schema} = mongoose;
//Şemayı oluşturuyoruz
const userSchema = new Schema({
    /*name:{
        type:String,
        required:true
    },
    surname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})

//Şimdi burada biz Userss yazarak heralde orada bir collection oluşturacağız, ardından da
const UserModel = connection.model('MyUSerss',userSchema);
//Ardından export ediyoruz 
module.exports = UserModel*/


//burası gpt kısmı
/*
const mongoose = require('mongoose');
const connection = require('../config/db.js');

const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

let UserModel;

connection()
    .then((db) => {
        UserModel = db.model('MyUsers', userSchema);
        module.exports = UserModel;
    })
    .catch((err) => {
        console.error(err);
    });
*/
//GPT2
/*
const mongoose = require('mongoose');
const connection = require('../config/db.js');

const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

let UserModel;

connection()
    .then((db) => {
        UserModel = db.model('MyUsers', userSchema);
        module.exports = UserModel;
    })
    .catch((err) => {
        console.error(err);
    });
*/
//GPT3
/*
const mongoose = require('mongoose');
const connection = require('../config/db.js');

const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

let UserModel;

const createUserModel = async () => {
    try {
        const db = await connection();
        UserModel = db.model('MyUsers', userSchema);
    } catch (err) {
        console.error(err);
        throw err;
    }
};

// UserModel'i dışa aktarırken bir Promise döndürelim
const exportUserModel = async () => {
    if (!UserModel) {
        await createUserModel();
    }
    return UserModel;
};

module.exports = exportUserModel;
*/


/* BU DAAA OLMUŞ HALİİ
const mongoose = require('mongoose');
const connection = require('../config/db.js');

const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

let UserModel;

const createUserModel = async () => {
    try {
        const db = await connection();
        UserModel = db.model('MyUsers', userSchema);
    } catch (err) {
        console.error(err);
        throw err;
    }
};

// UserModel'i dışa aktarırken bir Promise döndürelim
const exportUserModel = async () => {
    if (!UserModel) {
        await createUserModel();
    }
    return UserModel;
};

module.exports = exportUserModel;
*/


/*BU DA OLMUŞ BİR HALİİİİİİ
const mongoose = require('mongoose');
const connection = require('../config/db.js');

const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

let UserModel;

const createUserModel = async () => {
    try {
        const db = await connection();
        UserModel = db.model('MyUsers', userSchema);
    } catch (err) {
        console.error(err);
        throw err;
    }
};

module.exports = async () => {
    await createUserModel();
    return UserModel;
};
*/


/*EN EN EN EN OLMUŞ HALİ BUU
const mongoose = require('mongoose');
const connection = require('../config/db.js');

const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

let UserModel;

const createUserModel = async () => {
    try {
        const db = await connection();
        UserModel = db.model('MyUsers', userSchema);
    } catch (err) {
        console.error(err);
        throw err;
    }
};

module.exports = async () => {
    await createUserModel();
    return UserModel;
};
*/



/*
const mongoose = require('mongoose');
const connection = require('../config/db.js');

const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

let UserModel;

const createUserModel = async () => {
    try {
        const db = await connection();
        UserModel = db.model('MyUsers', userSchema);
    } catch (err) {
        console.error(err);
        throw err;
    }
};

createUserModel().then(() => {
    module.exports = UserModel;
});
*/


/*
const mongoose = require('mongoose');
const connection = require('../config/db.js');

const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

let UserModel;

const createUserModel = async () => {
    try {
        const db = await connection();
        UserModel = db.model('MyUsers', userSchema);
    } catch (err) {
        console.error(err);
        throw err;
    }
};

createUserModel();

setTimeout(() => {
    module.exports = UserModel;
}, 1000); // 1 saniye bekliyoruz
*/


/*
const mongoose = require('mongoose');
const connection = require('../config/db.js');

const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

let UserModel;

const createUserModel = async () => {
    try {
        const db = await connection();
        UserModel = db.model('MyUsers', userSchema);
    } catch (err) {
        console.error(err);
        throw err;
    }
};

// UserModel henüz oluşturulmadıysa oluşturulmasını bekle
const waitUserModel = async () => {
    while (!UserModel) {
        await new Promise(resolve => setTimeout(resolve, 100));
    }
};

createUserModel();

// UserModel oluşturulduktan sonra dışa aktar
waitUserModel().then(() => {
    module.exports = UserModel;
});
*/



/*
const mongoose = require('mongoose');
const connection = require('../config/db.js');

const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

let UserModel;

const createUserModel = async () => {
    try {
        const db = await connection();
        UserModel = db.model('MyUsers', userSchema);
    } catch (err) {
        console.error(err);
        throw err;
    }
};

createUserModel();

module.exports = UserModel;
*/

/*
const mongoose = require('mongoose');
const connection = require('../config/db.js');

const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const UserModel = connection()
  .then((db) => {
    return db.model('MyUsers', userSchema);

  })
  .catch((err) => {
    console.error(err)
  });

module.exports = UserModel;
*/
//Ardından export ediyoruz
//module.exports = UserModel;
/*
let usermodel
connection()
    .then((db) => {
        const usermodel = db.model('MyUsers', userSchema);
    })
    .catch((err) => {
        console.error(err);
    });

module.exports = usermodel;*/
