import {gql,useQuery } from '@apollo/client';
import { useEffect } from 'react';

const Homepage = () => {
      
      const { loading, error, data } = useQuery(gql`
      {
        launches(limit: 5) {
          launch_date_utc
          launch_success
          rocket {
            rocket_name
          }
          links {
            video_link
          }
          details
        }
      }
    `);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

      console.log(data)

    return ( <>

      <div>
        <h2>My first Apollo app 🚀</h2>
    {data.launches.map(({ details, launch_date_utc, launch_success, links, rocket }, index) => (
    <div key={index}>
      <p>{details}</p>
      <p>date : {launch_date_utc}</p>
      <p>success: {launch_success ? 'We did it!' : 'failure'}</p>
      <a href={links.video_link}>link</a>
      <p>rocket: {rocket.rocket_name}</p>
    </div>
      ))
    }
      </div>
    </> );
}
 
export default Homepage;