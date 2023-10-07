 import { createClient } from '@/prismicio';

const Footer = async ()=>{

    const client = createClient();
    const settings= await client.getSingle("settings")

    return(
        <div>Footer</div>
    )
}

export default Footer