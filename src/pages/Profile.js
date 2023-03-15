import { useEffect, useState } from 'react';
import styled from 'styled-components';

const ProfileWrapper = styled.div`
  width: 50%;
  margin: 2rem auto;
`;

const ProfileAvatar = styled.img`
  width: 150px;
`;

const Profile=({userName})=>{
    const [loading, setLoading] = useState(false);
    const [profile, setProfile] = useState({});

    useEffect( ()=>{
        async function fetchData() {
            const profile = await fetch(`https://api.github.com/users/${userName}`);
            const result = await profile.json();
      
            if (result) {
              setProfile(result);
              setLoading(false);
            }
          }
      
          fetchData();

    },[userName]);


    return (
        <div>
          <h2>My GitHub Profile</h2>
          {loading ? (
            <span>Loading...</span>
          ) : (
            <div>
                 <ProfileAvatar src={profile.avatar_url} alt={profile.name}
          />
            </div>
          )}
        </div>
       );
}

export default Profile;