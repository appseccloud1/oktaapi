import axios from 'axios';


const oktaApiUrl = 'https://dev-492185.okta.com';
const apiKey = '00sk09yur49esaeH87VoX_OqYj9p9MJDaNRqHF_VK1'; // Use environment variables for sensitive data
const groupId = '00g2444n5gRcr3wYT357';

// Get all users in the group
async function getGroupMembers() {
    try {
      const response = await axios.get(`${oktaApiUrl}/api/v1/groups/${groupId}/users`, {
        headers: {
          Authorization: `SSWS ${apiKey}`,
        },
      });
  
      return response.data;
    } catch (error) {
      console.error('Error getting group members:', error.response ? error.response.data : error.message);
      throw error;
    }
  }
  
  // Remove a user from the group
  async function removeUserFromGroup(userId) {
    try {
      await axios.delete(`${oktaApiUrl}/api/v1/groups/${groupId}/users/${userId}`, {
        headers: {
          Authorization: `SSWS ${apiKey}`,
        },
      });
      console.log(`User ${userId} removed from group.`);
    } catch (error) {
      console.error(`Error removing user ${userId} from group:`, error.response ? error.response.data : error.message);
      throw error;
    }
  }
  
  // Main script
  (async () => {
    try {
      const groupMembers = await getGroupMembers();
      //get members of the group
      for (const member of groupMembers) {
        //console.log(member.id);
        await removeUserFromGroup(member.id);
      }
     // LOG. 
      console.log('All users removed from the group.');
    } catch (error) {
      console.error('Script error:', error);
    }
  })();

