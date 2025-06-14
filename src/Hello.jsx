import'./Hello.css';
export default function Hello({name,surname,age}){
    return (
    <>
        <img className="profile"
        src="Octocat.png"/>

        <h1>Hello {name} {surname} {age+10}</h1>
            </>
    );
};
