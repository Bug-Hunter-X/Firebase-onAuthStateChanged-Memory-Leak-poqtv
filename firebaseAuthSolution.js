import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig'; // Import your Firebase config

function MyComponent() {
  const [user, setUser] = useState(null);
  const [isMounted, setIsMounted] = useState(true);
  
  useEffect(() => {
    let unsubscribe;
    if (isMounted){
      unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
      });
    }
    return () => {
      setIsMounted(false);
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);
  
  return (
    <div>
      {user ? <p>User is signed in: {user.uid}</p> : <p>User is signed out</p>}
    </div>
  );
}
export default MyComponent;