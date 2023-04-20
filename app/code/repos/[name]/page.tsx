import React, { Suspense } from 'react';
import Repo from '@/app/components/Repo';
import RepoDirs from '@/app/components/RepoDirs';
import Link from 'next/link';
const page = ({params}:{params:{[key:string]:string}}) => {
        
    return (
        <div>
            <hr />
            <Link href="/code/repos">Back</Link>
            <Suspense fallback={<h1>Loading Repo....</h1>}>
                <Repo name={params.name}/>
            </Suspense>

            <Suspense fallback={<h1>Loading directory....</h1>}>
              <RepoDirs name={params.name}/>
            </Suspense>
        </div>
    );
};

export default page;