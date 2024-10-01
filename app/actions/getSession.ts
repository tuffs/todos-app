import { db } from '@/lib/db';

const getSession = async() => {
  // This server action will check if a user is logged in by grabbing the localStorage information first
  // const loggedInEmail = localStorage.getItem('dktda_userEmail');
  // const loggedInAuthToken = localStorage.getItem('dktda_userAuthToken');

  // If there is a loggedInEmail && loggedInAuthToken
  // on localStorage, lets validate the user
  if (loggedInEmail && loggedInAuthToken) {
    try {

      // Get Auth Token Details
      const getTokenDetails = await db.userAuthToken.findFirst({
        where: {
          token: loggedInAuthToken || '',
        },
      });

      // Get Auth Email Details
      const getUserDetails = await db.user.findFirst({
        where: {
          email: loggedInEmail || '',
        },
      });

      // Token Details from Database
      const tokenDetails = getTokenDetails?.token;
      const tokenExpiration = getTokenDetails?.expiration;
      const tokenUserId = getTokenDetails?.userId;

      // User Email Details from Database
      const emailDetails = getUserDetails?.email;

      const checkSessionDetails = {
        email: emailDetails,
        userId: tokenUserId,
        token: tokenDetails,
        tokenExpiration: tokenExpiration,
      };

      // Time Now in Javascript
      const today = new Date();

      console.log("Token Expiration: ", tokenExpiration);
      
    } catch (error) {
      return { error: "There was a problem with the data provided." }
    }
  } else {

    // Create null values in localStorage for email and auth token
    localStorage.setItem('dktda_userEmail', '');
    localStorage.setItem('dktda_userAuthToken', '');

    console.log("No user logged in, localStorage values have been cleared.");
  }
}

export default getSession;