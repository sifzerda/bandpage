import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import '../App';

const Profile = () => {
    const { loading, data, error } = useQuery(QUERY_ME);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const user = data?.me;

    return (
        <div className="profile-container">

<div className="jumbo-bg-dark">
<h1 className='jumbo-bg-dark-text'>{user.username}'s Profile</h1>

</div>

            <p className='profile-text'>Nothing here yet.</p>
            <div className="thought-cards-p">
            </div>
        </div>
    );
};

export default Profile;