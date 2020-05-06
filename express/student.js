const express = require('express'); 
const bodyparser = require('body-parser');
const cors = require('cors'); 
const app = express(); 
const port = 3000; 


let students = [ 
    { 
        studID:"101", 
        studName:"Maya", 
        studGrade: "9",
        stuAddress:"Syed Abdullah street", 
        Location:"Chennai", 
        Course:"Maths", 
        Phone:"9884485929"
    }, 
    { 
        
        studID:"102",
        studName:"Meera", 
        studGrade: "9",
        stuAddress:"Kana bagh street", 
        Location:"Chennai", 
        Course:"Maths", 
        Phone:"9884485099"
    }, 
    { 
         
        studID:"103",  
        studName:"Kaarunya",
        studGrade: "9",
        stuAddress:"Mulla Street", 
        Location:"Chennai", 
        Course:"Maths",
       Phone:"9444330499"
    } 

] 

app.use(cors()); 
app.use(bodyparser.urlencoded({ extended: false})); 
app.use(bodyparser.json()); 


                   //get
app.get('/student',(req,res)=> { 
res.json(students);
 });

app.get('/student/:studID', (req,res) => { 
const studID = req.params.studID; 
//searching students for the studID 
for(let student of students) { 
if(student.studID === studID) { 
res.json(student); 
return;
}
}  
res.status(404).send('student not found'); 
}); 
                 


             //post
app.post('/student/:studID',(req,res)=> { 
//redaing studID from url 
const studID = req.params.studID; 
const newstudent = req.body;
//remove item from the students array 
for(let i=0; i< students.length; i++) 
{ 
let student = students[i]; 
if(student.studID === studID)
{ 
students[i] = newstudent;
}
}
res.send('student array is edited');
 }); 

app.post('/student',(req,res)=> { 
const student=req.body; 
console.log(student); 
students.push(student); 
res.send('New object added to db');
}); 

                     //put 
app.put('/student/:studID',(req,res)=>{
const studID=req.params.studID;
const newstudent=req.body;
for(let i=0;i<students.length;i++){
let student=students[i]
if(student.studID===studID)
{
students[i]=newstudent;
}
}
res.send('student array is edited');
});


                        //DELETE
app.delete('/student/:studID', (req,res) => { 
//reading studID from the url
const studID = req.params.studID; 
//remove items from the students array 
students = students.filter(i => { 
if(i.studID !== studID) { 
return true; 
}
return false;
}); 
res.send('student is deleted');
});
                        


                     
 app.listen(port, () => {
 console.log(`hello .we are listening on port ${port}`); 
 }); 
                    