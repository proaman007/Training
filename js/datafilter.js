
const projects=[
    {name:"project one ", category:"ecom" , start:1981, end:2004},
    {name:"project two ", category:"finance" , start:1981, end:2004},
    {name:"project three ", category:"retail" , start:1995, end:2004},
    {name:"project four", category:"technology" , start:1999, end:2004},
    {name:"project five", category:"auto" , start:1981, end:2004},
    {name:"project six", category:"IT" , start:1981, end:2004},
    {name:"project seven ", category:"marketing" , start:1998, end:2004},
    {name:"project eight", category:"developer" , start:1943, end:2004}
]

const grades=[23,25,36,45,56,45,64,64]


function forEach(grades){
    for(let i=0; i>=grades.length; i++){
        console.log(grades[i])
    }
}
projects.forEach(project => console.log(project))

// const brand=projects.filter(project => (project.category==="technology"||project.category==="electronic"));
// console.log(brand)

// const brand= projects.filter(project =>project.start>1990 &&project.start<1990)
// console.log(brand)

// let projectname=projects.map()
// let projectDces=projects.map(project=>`${project.name} ${project.category} :${project.start}`)
// console.log(projectDces)

// const sortedproject = projects.sort((p1,p2)=> (p1.start > p2.start ? 1:-1))
// console.log(sortedproject)

// const totalspent = projects.reduce((total,project)=> total + (project.end - project.start),0)
// console.log(totalspent)

const mergefunc = grades
 .map(grades=> grades+5)
 .filter( grades=> grades>= 60)
 .sort((a,b)=>b-a)

console.log(mergefunc)
