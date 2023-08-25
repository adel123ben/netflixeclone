import '@/styles/globals.css'
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Auth from './auth';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    try {
      // Effectuez ici une requête vers votre backend pour vérifier l'authentification de l'utilisateur
      const response = await fetch('/api/check-auth'); // Par exemple, vous pouvez créer une API pour vérifier l'état d'authentification de l'utilisateur

      if (response.status === 200) {
        // L'utilisateur est authentifié, le rediriger vers la page de tableau de bord
        router.push('/auth');
      } else {
        // L'utilisateur n'est pas authentifié, le rediriger vers la page de connexion
        router.push('/auth');
      }
    } catch (error) {
      // En cas d'erreur, rediriger vers la page de connexion
      router.push('/');
    }
  };

  return <Component {...pageProps} />
}





