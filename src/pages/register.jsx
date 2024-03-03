import { Helmet } from 'react-helmet-async';

import { RegisterView } from '../sections/register';

// ----------------------------------------------------------------------

export default function RegisterPagePage() {
  return (
    <>
      <Helmet>
        <title> Register | Minimal UI </title>
      </Helmet>

      <RegisterView />
    </>
  );
}