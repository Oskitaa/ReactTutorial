import React , { useEffect,useState } from "react";
import "../css/repository.scss";
function Repository(){

    interface Repositorio{
        name : String,
        description : String,
        created_at : Date,
        html_url : String
    }

    useEffect(() => {
        fecthRepo();
    }, []);

    const [repos , setRepos] = useState<Repositorio[]>([]);

    const fecthRepo = async ()=> {
        const data = await fetch("https://api.github.com/users/oskitaa/repos");
        const repos = await data.json();
        setRepos(repos);
    };
    
    return(
        <div>
            <h1>Repositorios</h1>
            {
                repos.map( repo => (
                    <div>
                        <p className="title_repo"><a href={`${repo.html_url}`} target="blank" >{repo.name} </a> - <span>{new Date(repo.created_at).getFullYear()}</span></p>
                        <p>{repo.description}</p>
                    </div>
                    
                ))
            }
        </div>
    )
}

export default Repository;