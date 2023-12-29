const exp = require("express");
const app = exp();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());

app.use(exp.json());

const db = mysql.createConnection({
    host: '161.97.78.70',
    user: 'u33653_HtwVcWSZVv',
    password:'!WbJGd^lq@=UKS78L=nn4.bQ' ,
    database: 's33653_Blaze'
  });

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
  
});

app.get('/doctors', (req, res) => {
  db.query("SELECT *from doctorModel", (err, result) => {
    if (err) {
      console.log(err);
    }
    else {
      console.log(result)
      res.send(result)
    }
  })
})

app.get('/teachers', (req, res) => {
  db.query("SELECT *from teachers", (err, result) => {
    if (err) {
      console.log(err);
    }
    else {
      console.log(result)
      res.send(result)
    }
  })
})

app.get('/ration',(req,res)=>{
  db.query("select *from ration",(err,result)=>{
    if(err) console.log(err);
    else res.send(result)

  })

})
app.get('/municipal',(req,res)=>{
  db.query("select *from municipal",(err,result)=>{
    if(err) console.log(err);
    else res.send(result)

  })

})
app.get('/view',(req,res)=>{
  db.query("select *from complaints",(err,result)=>{
    if(err) console.log(err);
    else res.send(result)

  })

})

app.post("/complaints", (req, res) => {
  const c_name = req.body.complainer_name;
  const c_phone = req.body.complainer_phone;
  const c_domain=req.body.complaint_domain;
  const c_against=req.body.against_person_name;
  const c_complaint=req.body.complaint_detail;
  db.query(`insert into complaints values('${c_name}','${c_phone}','${c_domain}','${c_against}','${c_complaint}');`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  db.query(`insert into login values('${username}','${password}');`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
})
app.get("/verify", (req, res) => {
  const { username, password } = req.query;
  console.log('Username:', username);
  console.log('Password:', password);
  db.query(`select *from login where username='${username}' and password='${password}';`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("result from express ",result);
        res.send(result);
      }
    }
  );
})
app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const name=req.body.name;
  const phoneno=req.body.phoneno;
  db.query(`insert into login values('${username}','${password}','${name}','${phoneno}');`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
})

