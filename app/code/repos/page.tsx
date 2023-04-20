import Link from "next/link"

const fetchRepos=async()=>{
    try{
        const res=await fetch('https://api.github.com/users/raselinfo/repos',{
            next:{
                revalidate: 60
            }
        })
        const data=await res.json()

        return data
    }catch(err){
        console.log(err)
    }
}
const page = async() => {
    const repos=await fetchRepos()
    
    return (
        <div>
            <h1>Code Repos</h1>
            <div>
                {repos.map((repo:any)=>{
                    return <li key={repo.id}>
                        <Link href={`/code/repos/${repo.name}`}>
                            <h3>{repo.name}</h3>
                            <p>{repo.description}</p>
                            <div className="repo-details">
                                <span>
                                ✅ {repo.stargazers_count}   
                                </span>
                                <span>
                                ✅ {repo.forks_count}   
                                </span>
                                <span>
                                ✅ {repo.watchers_count}   
                                </span>
                            </div>
                        </Link>
                    </li>
                })}
            </div>
        </div>
    );
};

export default page;

