import { EndpointsDefaultsAndDecorations } from "../types";
const Endpoints: EndpointsDefaultsAndDecorations = {
  orgs: {
    listCredentialAuthorizations: [
      { method: "GET", url: "/orgs/:org/credential-authorizations" }
    ],
    removeCredentialAuthorization: [
      {
        method: "DELETE",
        url: "/orgs/:org/credential-authorizations/:credential_id"
      }
    ]
  },
  scim: {
    getProvisioningDetailsForUser: [
      { method: "GET", url: "/scim/v2/organizations/:org/Users/:scim_user_id" }
    ],
    listProvisionedIdentities: [
      { method: "GET", url: "/scim/v2/organizations/:org/Users" }
    ],
    provisionAndInviteUsers: [
      { method: "POST", url: "/scim/v2/organizations/:org/Users" }
    ],
    provisionInviteUsers: [
      { method: "POST", url: "/scim/v2/organizations/:org/Users" },
      { renamed: ["scim", "provisionAndInviteUsers"] }
    ],
    removeUserFromOrg: [
      {
        method: "DELETE",
        url: "/scim/v2/organizations/:org/Users/:scim_user_id"
      }
    ],
    replaceProvisionedUserInformation: [
      { method: "PUT", url: "/scim/v2/organizations/:org/Users/:scim_user_id" }
    ],
    updateProvisionedOrgMembership: [
      { method: "PUT", url: "/scim/v2/organizations/:org/Users/:scim_user_id" },
      { renamed: ["scim", "replaceProvisionedUserInformation"] }
    ],
    updateUserAttribute: [
      {
        method: "PATCH",
        url: "/scim/v2/organizations/:org/Users/:scim_user_id"
      }
    ]
  },
  teams: {
    createOrUpdateIdPGroupConnections: [
      { method: "PATCH", url: "/teams/:team_id/team-sync/group-mappings" }
    ],
    listIdPGroups: [
      { method: "GET", url: "/teams/:team_id/team-sync/group-mappings" }
    ],
    listIdPGroupsForOrg: [{ method: "GET", url: "/orgs/:org/team-sync/groups" }]
  }
};

export default Endpoints;