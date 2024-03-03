// import React, { useState, useEffect } from 'react';
// import { Route, Redirect } from 'react-router-dom';

// import { auth, firestore } from '../../firebase/firebase';

// const ProtectedRoute = ({ component: Component, role, ...rest }) => {
//   const [userRole, setUserRole] = useState(null);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(async (user) => {
//       if (user) {
//         const userDoc = await firestore.collection('users').doc(user.uid).get();
//         setUserRole(userDoc.data().is_admin);
//       } else {
//         setUserRole(null);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         userRole === role ? <Component {...props} /> : <Redirect to="/login" />
//       }
//     />
//   );
// };

// export default ProtectedRoute;
