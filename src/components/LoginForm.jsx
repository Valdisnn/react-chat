import {useState} from 'react';
import axios from 'axios';

const projectID = '81b3607e-ace0-4406-a422-fd26466a38ee';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = {'Project-ID': projectID, 'User-Name': username, 'User-Secret': password};

        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
            setError('');
        } catch (err) {
            setError(`Something went wrong =(`);
        }
    };

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">React Chat</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input"
                           placeholder="Username" required/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                           className="input" placeholder="Password" required/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Login</span>
                        </button>
                    </div>
                </form>
                <h2 className={error}
                    style={{textAlign: 'center', color: '#fff', fontWeight: 900, marginTop: '10%'}}>{error}</h2>
            </div>
        </div>

    );
};

export default LoginForm;
