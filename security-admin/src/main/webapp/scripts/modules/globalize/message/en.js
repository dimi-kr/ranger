/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

 /**
 * Never Delete any key without seraching it in all View and Template files
 */
/*(function( window, undefined ) {

var Globalize;

if ( typeof require !== "undefined" &&
	typeof exports !== "undefined" &&
	typeof module !== "undefined" ) {
	// Assume CommonJS
	Globalize = require( "../globalize.js" );
} else {
	// Global variable
	Globalize = window.Globalize;
}
*/
define(function(require) {
	'use strict';
        var Globalize = require( "globalize" );

	Globalize.addCultureInfo( "en", {
        messages:                  {
        	// Form labels, Table headers etc
			lbl : {
				// Common
				// Accounts
				// MSLinks
				/*
				 * Menu related
				 */
				home 						: 'Home',
				name 						: 'Name',
				password					: 'Password',
				passwordConfirm				: 'Password Confirm',
				listOfPolicies 				: 'List of Policies',
				addNewPolicy 				: 'Add New Policy',
				resource					: 'Resource',
				action						: 'Action',
				result						: 'Result',
				enforcer					: 'Enforcer',
				date						: 'Date',
				resourcePath 				: 'Resource Path',
				includesAllPathsRecursively : 'Recursive',
				groups 						: 'Groups',
				group 						: 'Groups',
				auditLogging 				: 'Audit Logging',
				isDenyAllElse				: 'Deny All Other Accesses',
				encrypted 					: 'Encrypt',
				resourceType 				: 'Resource Type',
				description 				: 'Description',
				groupPermissions			: 'Group Permissions',
				userPermissions				: 'User Permissions',
				selectGroup					: 'Select Group',
				admin						: 'Admin',
				execute						: 'Execute',
				create 						: 'Create',
				write						: 'Write',
				deletes						: 'Delete',
				read						: 'Read',
				select						: 'Select',
				update						: 'Update',
				drop						: 'Drop',
				alter						: 'Alter',
				index						: 'Index',
				lock						: 'Lock',
				all							: 'All',
				databaseName				: 'Database Name',
				tableName					: 'Table Name',
				columnName					: 'Column Name',
				columnFamilies				: 'Column Families',
				selectDatabaseName			: 'Select Database Name',
				selectTableName				: 'Select Table Name',
				selectColumnName			: 'Select Column Name',
				enterColumnName				: 'Enter Column Name',
				selectColumnFamilies		: 'Select Column Familes',
				resourceInformation 		: 'Resource Information',
				database					: 'Database'	,
				table						: 'Table',
				column						: 'Column',
				policyInfo					: 'Policy Information',
				createdBy 					: 'Created By',
				createdOn					: 'Created On',
				updatedBy					: 'Updated By',
				updatedOn					: 'Updated On',
				groupName					: 'Group Name',
				permissions					: 'Permissions',
				permissionGranted			: 'Permission Granted',
				createAccount 				: 'Create Account',
				editAccount 				: 'Edit Account ',
				selectFolder 				: 'Select Folder',		
				exports						: 'Export Policies',
				userName					: 'User Name',
				authToLocal					: 'authToLocal',
				dataNode					:'dataNode',
				nameNode					:'nameNode',
				secNamenode					:'secNamenode',
				userAccessReport				: 'User Access Report',
				auditReport					: 'Audit Report',
				createAsset					: 'Create Repository',
				editAsset					: 'Edit Repository',
				assetType					: 'Repository Type',
				selectUser					: 'Select User',
				listOfHDFSPolicies 			: 'List of HDFS Policies',
				listOfHIVEPolicies 			: 'List of HIVE Policies',
				listOfHBASEPolicies 		: 'List of HBASE Policies',
				listOfKNOXPolicies 			: 'List of KNOX Policies',
				listOfSTORMPolicies 		: 'List of STORM Policies',
				users						: 'Users',
				repository					: 'Repository',
				repositoryDetails 			: 'Repository Details',
				createRepository			: 'Create Repository',
				
				firstName					: 'First Name',
				lastName					: 'Last Name',
				email 						: 'Email',
				emailAddress    			: 'Email Address',
				newPassword     			: 'New Password',
				reEnterPassword 			: 'Re-enter New Password',
				oldPassword					: 'Old Password',
				
				customerName 				: 'Customer Name',
				accountCode						: 'Account Code',
				accountStatus					: 'Account Status',
				ActiveStatus_STATUS_ENABLED 	: 'Enabled',
				ActiveStatus_STATUS_DISABLED 	: 'Disabled',
				visibility						: 'Visibility',
				VisibilityStatus_IS_VISIBLE     : 'Visible',
				VisibilityStatus_IS_HIDDEN      : 'Hidden',
				commonNameForCertificate 		: 'Common Name For Certificate',
				status							: 'Status',
				userListing						: 'User List',
				userInfo						: 'User Info',
				userEdit						: 'User Edit',
				userCreate						: 'User Create',
				groupEdit						: 'Group Edit',
				groupCreate						: 'Group Create',
				addNewUser						: 'Add New User',
				addNewGroup						: 'Add New Group',
				selectUserDefinedFunction		: 'Select UDF',
				selectView						: 'Select View',
				udfName							: 'UDF Name',
				viewName						: 'View Name',
				permForTable					: 'Permission For Tables',
				permForView					 	: 'Permission For Views',
				permForUdf						: 'Permission For User Defined Function',
				policyStatus					: 'Policy Status',
				httpResponseCode				: 'Http Response Code',
				repositoryName					: 'Repository Name',
				agentId							: 'Plugin ID',
				agentIp							: 'Plugin IP',
				createDate						: 'Export Date',
				attributeName 					: 'Attribute Name',
				policyType						: 'Policy Type',
				previousValue					: 'Previous Value',
				newValue						: 'New Value',
				udf								: 'UDF',
				tableType						: 'Table Type',
				columnType						: 'Column Type',
				accountName						: 'Account Name',
				createdDate						: 'Created Date',
				sessionId						: 'Session ID',
				operation						: 'Operation',
				auditType						: 'Audit Type',
				user							: 'User',
				application						: 'Application',
				actions							: 'Actions',
				loginId							: 'Login ID',
				loginType						: 'Login Type',
				ip								: 'IP',
				userAgent						: 'User Agent',
				loginTime						: 'Login Time',
				sessionDetail					: 'Session Detail',
				ok								: 'OK',
				id								: 'ID',
				type							: 'Type',
				resourceId						: 'Resource ID',
				eventTime						: 'Event Time',
				resourceName					: 'Resource Name',
				repoType						: 'Repository Type',
				accessType						: 'Access Type',
				aclEnforcer						: 'Access Enforcer',	
				active							: 'Active',
				selectRole						: 'Select Role',
				role							: 'Role',
				userSource						: 'User Source',
				groupSource						: 'Group Source',
				policyName						: 'Policy Name',
				allow							: 'Allow',
				allowAccess							: 'Allow Access',
				selectTopologyName				: 'Select Topology Name',
				selectServiceName				: 'Select Service Name',
				topologyName					: 'Topology Name',
				ipAddress						: 'IP Address',
				isVisible                       : 'Visible',
				delegatedAdmin					: 'Delegate Admin',
				policyId						: 'Policy ID',
				moduleName						: 'Module Name',
				keyManagement					: 'Key Management',
				addNewKey						: 'Add New Key',
				keyName							: 'Key Name',
				cipher							: 'Cipher',
				length							: 'Length',
				version							: 'Version',
				attributes						: 'Attributes',
				material						: 'Material',
				addNewConfig					: 'Add New Configurations',
				createService					: 'Create Service',
				editService						: 'Edit Service',
				serviceDetails					: 'Service Details',
				serviceName						: 'Service Name',
				PolicyType_ALLOW				: 'Allow',
				PolicyType_DENY					: 'Deny',
				componentPermissions			: 'Component Permissions',
				selectDataMaskTypes				: 'Select Data Mask Types',
				accessTypes						: 'Access Types',
				rowLevelFilter					: 'Row Level Filter',
				selectMaskingOption             : 'Select Masking Option',
				versionTime                     : 'Version / Time',
				serviceType                     : 'Service Type',
                hostName						: 'Host Name',
                selectAndAddUser                : 'Select and Add User',
                selectAndAddGroup               : 'Select and Add Group',
                download                        : 'Download',
                lastUpdate                      : 'Last Update',
		  		modules		                	: 'Modules',
                clusterName                     : 'Cluster Name',
                zoneName                        : 'Zone Name',
                policyVersion                   : 'Policy Version',
                policyLabels					: 'Policy Labels',
                activeStatus                    : 'Active Status',
                selectTagService                : 'Tag Service',
                syncSource                      : 'Sync Source',
                unixBackend                     : 'Unix',
                fileName                        : 'File Name',
                syncTime                        : 'Sync time',
                lastModified                    : 'Last modified time',
                ldapUrl                         : 'Ldap url',
                isIncrementalSync               : 'Incremental sync',
                groupHierarchyLevel             : 'Group hierarchy level',
                minUserId                       : "Minimum user id",
                minGroupId                      : "Minimum group id",
                userSearchFilter                : 'User search filter',
                groupSearchFilter               : 'Group search filter',
                startDate                       : 'Start Date',
                endDate                         : 'End Date',
                addValidityPeriod               : ' Add Validity Period',
                editValidityPeriod              : ' Edit Validity Period',
                totalUsersSynced                : 'Total number of users synced',
                totalGroupsSynced               : 'Total number of groups synced',
                addPolicyCondition              : 'Add Policy Condition',
                editPolicyCondition             : 'Edit Policy Condition',
                agentHost	                    :'Agent Host Name',
                addNewRole                      : 'Add New Role',
                roleName                        : 'Role Name',
                roleCreate                      : 'Role Create',
                roleEdit                        : 'Role Edit',
                roles                           : 'Roles',
                userWithGrantRolePrivilege      : 'Users (Grant privilege)',
                groupWithGrantRolePrivilege      : 'Groups (Grant privilege)',
                applicationType                 : 'Application',
                displayName                     : 'Display Name',
                auditAccessDetail               : 'Audit Access Log Detail',
                hiveQuery                       : 'Hive Query',
                clientIP                        : 'Client IP',
                eventCount                      : 'Event Count',
                tags                            : 'Tags',
                permission                      : 'Permission'

			},
			btn : {
				add							: 'Add',
				save						: 'Save',
				cancel 						: 'Cancel',
				addMore						: 'Add More..',
				stayOnPage					: 'Stay on this page',
				leavePage					: 'Leave this page',
				setVisibility               : 'Set Visibility',
				setStatus               	: 'Set Status'
				
			},
			// h1, h2, h3, fieldset, title
			h : {
				welcome						: 'Welcome',
				logout 						: 'Logout',
				xaSecure					: 'XA Secure',
				listOfPlugins				: 'See third-party tools/resources that Ranger uses and their respective authors.',
				licenseText                 : 'Licensed under the Apache License, Version 2.0',
				
	
				// Menu
				dashboard					: 'Dashboard',
				policyManager 				: 'Policy Manager',
                                usersOrGroupsOrRoles		: 'Users/Groups/Roles',
				reports 					: 'Reports',
				config 						: 'Config',
				accounts					: 'Accounts',
				analytics					: 'Analytics',
				audit						: 'Audit',
				repositoryManager			: 'Manage Repository',
				serviceManager				: 'Service Manager',
				hdfs  						: 'HDFS',
				hive  						: 'Hive',
				createPolicy 				: 'Create Policy',
				editPolicy	 				: 'Edit Policy',
				managePolices 				: 'Manage Polices',
				manageTables				: 'Manage Table',
				userProfile					: 'User Profile',
				users						: 'Users',
				agents						: 'Plugins',
				repository					: 'Repository',
				policy						: 'Policy',
				policyDetails				: 'Policy Details',
				userGroupPermissions		: 'User and Group Permissions',
				groups						: 'Groups',
				admin						: 'Admin',
				bigData						: 'Big Data',
				loginSession				: 'Login Sessions',
				operationDiff				: 'Operation ',
				searchForYourAccessAudit 	:"Search for your access audits...",
				searchForYourAccessLog 		:"Search for your access logs...",
				searchForYourLoginSession 	:"Search for your login sessions...",
				searchForYourAgent 			:"Search for your plugins...",
				searchForPolicy				:"Search for your policy...",
				searchForPermissions		:"Search for permissions...",
				searchForYourUser 			:"Search for your users...",
				searchForYourGroup 			:"Search for your groups...",
                                searchForYourRole			:"Search for your roles",
				access						: 'Access',
				policyCondition				: 'Policy Conditions',
				permissions					: 'Permissions',
				kms							: 'KMS',
				keyCreate					: 'Key Create',
				keyEdit						: 'Key Edit',
				searchForKeys				:"Search for your keys...",
				encryption					: 'Encryption',
				settings					: 'Settings',
                serviceNameMsg              :'Name of service.',
                serviceTypeMsg              :'Select type of service.',
                startDate                   :'Set start date.',
                userMsg                     :'Name of User.',
                application                 :'Application.',
                tagsMsg                     :'Tag Name.',
                endDate                     :'Set end date.',
                groupNameMsg                :'Name of Group.',
                collection                  :'Solr collection.',
                database                    :'Hive database.',
                entity                      :'Atlas all-entity.',
                path                        :'Name of policy resource.',
                queue                       :'Yarn queue.',
                topic                       :'Kafka topic.',
                type                        :'Policy for all type.',
                udf                         :'Hive udf.',
                pluginStatus                :'Plugin Status',
                clusterName                 :'Name of ambari cluster',
                zoneName                    :"Name of Zone",
                policyVersion               :'Policy Version',
                url        					:'Hive url.',
                rowFilter                   : 'Row Filter',
                policyLabelsinfo			: 'Label of policy',
                serviceDetails              :'Service Details',
                configProperties            : 'Config Properties',
                userSync                    :'User Sync',
                syncSourceInfo              :'Sync Source',
                syncDetails                  :'Sync Details',
                typeCategory                :'Atlas type category.',
                entityType                  :'Atlas entity type.',
                entityClassification        :'Atlas entity classification.',
                atlasService                :'Atlas services.',
                connector                   :'Connectivity By Sqoop.',
                link                        :'Linker Name.',
                job                         :'Sqoop Job Name.',
                project                     :'Kylin Project Level.',
                nifiResource                :'NiFi Resource Identifier.',
                securityZone				:'Security Zone',
                zoneCreate					:'Create Zone',
                zoneEdit					:'Zone Edit'
                        },
			msg : {
				deletePolicyValidationMsg : 'Policy does not have any settings for the specific resource. Policy will be deleted. Press [Ok] to continue. Press [Cancel] to edit the policy.',
				areYouSureWantToDelete	  : 'Are you sure want to delete ?',
				policyDeleteMsg 		  : 'Policy deleted successfully',
				policyNotAddedMsg		  : 'Policy not added!',
				addGroupPermission		  : 'Please add permission(s) for the selected group, else group will not be added.',
				addGroup		  		  : 'Please select group for the selected permission(s), else group will not be added.',
				addUserPermission		  : 'Please add permission(s) for the selected user, else user will not be added.',
				addUser		  		 	  : 'Please select user for the selected permission(s), else user will not be added.',
				enterAlteastOneCharactere : 'Enter at least one character.',
				permsAlreadyExistForSelectedUser : 'Permission already exists for selected user.',
				permsAlreadyExistForSelectedGroup : 'Permission already exists for selected group.',
				youDontHavePermission 	  : 'You don\'t have permission for the resource !!',
				myProfileError			  :'Your password does not match. Please try again with proper password',
				myProfileSuccess		  :'Profile Edited successfully',
				userNameAlreadyExist	  : 'User name already exists',
				groupNameAlreadyExist	  : 'Group name already exists',
				yourAuditLogginIsOff 	  :'You must have at least one or more user/group access defined for the policy.',
				policyNotHavingPerm		  : 'The policy does not have any permissions so audit logging cannot be turned off',
				areSureWantToLogout		  : 'Are you sure want to logout ?',
				groupDoesNotExistAnymore  : 'Group does not exist anymore..',
				userDoesNotExistAnymore   : 'User does not exist anymore..',
				repoDoesNotExistAnymore   : 'Repository does not exist anymore..',
				policyDisabledMsg		  : 'This policy is currently in disabled state.',
				noRecordsFound			  : 'No Records Found',
				keyDeleteMsg			  : 'Key deleted successfully',
				rolloverSuccessfully	  : 'Key rollover successfully',
                                addUserOrGroupOrRole	  : 'Please select group/user/role for the selected permission, else group/user will not be added.',
                                addUserOrGroupOrRoleForPC : 'Please select group/user/role for the added policy condition, else group/user will not be added.',
				userCreatedSucc		      : 'User created successfully',
				userUpdatedSucc           :     'User updated successfully',
				grpUpdatedSucc            : 'Group updated successfully',
				grpCreatedSucc            : 'Group created successfully',
                                errorLoadingAuditLogs	  : 'Error loading audit logs!!',
                enterCustomMask			  : 'Please enter custom masked value or expression !!',
                policyNameMsg           :'Enter name of policy.',
                policyTypeMsg           :'Select Type of policy eg. access, masking, row level filter policies.'    ,
                componentMsg            :'Select Hadoop Component eg. HDFS, Hive etc.',
                searchBy                :'Search by user name or group name.',
                resourceMsg             :'Enter name of resource for eg. path, table/column name etc.',
                accessEnforcer          :'Search by access enforcer name.',
                accessTypeMsg           :'Search by access Type like READ_EXECUTE, WRITE_EXECUTE.',
                clientIP                :'Search by IP address from where resource was accessed.',
                resourceName            :'Resource name.',
                resourceTypeMsg         :'Search by resource type based on component. eg. path in HDFS, database    ,table in Hive.',
                resultMsg               :'Search by access result i.e Allowed/Denied logs.',
                statusMsg               :'Status of Policy Enable/Disable.',
                columnfamily            :'Hbase column-family',
                searchForPluginStatus   : "Search for your plugin status...",
                pleaseSelectUser        : 'Please select user.',
                pleaseSelectGroup       : 'Please select group.',
                addSelectedUserGroup	: 'Please add selected user/group to permissions else user/group will not be added.',
                maskingPolicyInfoMsg   	: 'Please ensure that users/groups listed in this policy have access to the column via an <b>Access Policy</b>. This policy does not implicitly grant access to the column.',
                maskingPolicyInfoMsgForTagBased   	: 'Please ensure that users/groups listed in this policy have access to the tag via an <b>Access Policy</b>. This policy does not implicitly grant access to the tag.',
                rowFilterPolicyInfoMsg 	: 'Please ensure that users/groups listed in this policy have access to the table via an <b>Access Policy</b>. This policy does not implicitly grant access to the table.',
                udfPolicyViolation      : '<b> Warning !!</b>  : UDF create is a privileged operation. Please make sure you grant them to only trusted users.',
                noServiceToExport       :'No service found to export policies.',
                noServiceToImport       :'No service found to import policies.',
                noPolicytoExport        :'No policies found to export!',
                importingFiles          :'Importing policies from file is started...',
                noDeleteUserRow           :'Please select user first to delete.',
                noDeleteGroupRow        :'Please select group first to delete.',
                plsSelectUserToSetVisibility :' Please select user to set visibility or selected user is already visible/hidden.',
                plsSelectGroupToSetVisibility:' Please select group to set visibility or selected group is already visible/hidden.',
                activationTimeDelayMsg       : 'Policy is updated but not yet used for any enforcement.',
                downloadTimeDelayMsg       : 'Policy is updated but not yet downloaded(sync-up with Ranger).',
                pleaseSelectAccessTypeForTagMasking : 'Please select access type first to enable add masking options.',
                addUserOrGroupOrRoleForDelegateAdmin      : 'Please select user/group/role for the selected permission(s)',
                policyLabelsinfo		: 'Enter label of policy',
                noUserFoundText			: 'No user is associated with this group.',
                showInitialHundredUser  : 'Initially search filter is applied for first hundred users. To get more users click on ',
                searchForUserSync       :"Search for your user sync audits...",
                policyExpired           :'Policy Expired',
                duplicateNewConfigValidationMsg     :'Please make sure the new configuration has no duplicate names',
                zoneDeleteMsg 		    : 'Zone deleted successfully',
                zoneNameValidation	    : 'Please select Zone Name.',
                policyVersionValidation	: 'Please select Policy Version.',
                zoneServiceNameValidation: 'Please select Service Name for selected zone.',
                adminUserGroupValidation: 'Please select atleast one Admin Users/Usergroups to Zone else Zone will not be added.',
                auditorUserGroupValidation: 'Please select atleast one Auditor Users/Usergroups to Zone else Zone will not be added.',
                selectZoneFile          : 'Selected file does not contain zone details, Please select appropriate file containing zone details',
                selectOtherFile         : 'Selected file contains zone details, Please select appropriate file without zone details',
                policyTimeDetails       : '<b>Last Update: </b>Last updated time of policy.<br><b>Download: </b>Time when policy actually downloaded(sync-up with Ranger).<br>\
                                            <b>Active: </b>Time when policy actually in use for enforcement.',
                tagPolicyTimeDetails    : '<b>Last Update: </b> Last updated time of Tag-service.<br><b>Download: </b>Time when tag-based policies sync-up with Ranger.<br>\
                                            <b>Active: </b>Time when tag-based policies in use for enforcement.',
                noDeleteRoleRow         :'Please select ranger role first to delete.',
                addRolePermission       : 'Please add permission(s) for the selected role, else role will not be added.',
                addRole                 : 'Please select role for the selected permission(s), else role will not be added.',
                addSelectedUserGroupRoles : 'Please add selected user/group/roles to there respective table else user/group/roles will not be added.',
                accessDenied            : 'Sorry, you don\'t have enough privileges to view this page.',
                noContent               : 'Sorry, Please sync-up the users with your source directory.',
                signOutIsNotComplete    : 'Authentication to this instance of Ranger is managed externally(for example,Apache Knox). \
                                        You can still open this instance of Ranger from the same web browser without re-authentication. \
                                        To prevent additional access to Ranger, <b>close all browser windows and exit the browser</b>.',
                pageNotFound            : 'Sorry, this page isn\'t here or has moved.'


			},
			plcHldr : {
				search 						:'Search',
				searchByResourcePath		:'Search by resource path'
			},
			dialogMsg :{
				preventNavPolicyForm : 'Policy form edit is in progress. Please save/cancel changes before navigating away!',
				preventNavRepositoryForm : 'Repository form edit is in progress. Please save/cancel changes before navigating away!',
				preventNavUserForm : 'User form edit is in progress. Please save/cancel changes before navigating away!',
				preventNavGroupForm : 'Group form edit is in progress. Please save/cancel changes before navigating away!',
				preventNavUserList : 'Some Users/Groups have been edited. Kindly save your changes before navigating away!',
				preventNavZoneForm : 'Zone form edit is in progress. Please save/cancel changes before navigating away!'
				
			},	
			validationMessages : {
				required 			   : "* This field is required",
				onlyLetterNumberUnderscore :'* Only Alpha Numeric and underscore characters are allowed',
				alphaNumericUnderscoreDotComma :'* Only Alpha Numeric,underscore,comma,hypen,dot and space characters are allowed',
				oldPasswordError       :'Your password does not match. Please try again with proper password',
				oldPasswordRepeatError :'You can not use old password.',
				newPasswordError       :'Invalid Password. Minimum 8 characters with min one alphabet and one numeric.',
				emailIdError           : 'Please enter valid email address.',
				enterValidName         : 'Please enter valid name.',
				passwordError          :'Password should be minimum 8 characters with min one alphabet and one numeric.',
				userNameValidationMsg  :'1. User name should be start with alphabet / numeric / underscore / non-us characters.<br> 2. Allowed special character ,._\-+/@= and space. <br>3. Name length should be greater than one.',
				groupNameValidationMsg :'1. Group name should be start with alphabet / numeric / underscore / non-us characters.<br> 2. Allowed special character ,._\-+/@= and space. <br>3. Name length should be greater than one.',
                firstNameValidationMsg :'1. First name should be start with alphabet / numeric / underscore / non-us characters.<br> 2. Allowed special character ._-@ and space. <br>3. Name length should be greater than one.',
                lastNameValidationMsg  :'1. Last name should be start with alphabet / numeric / underscore / non-us characters.<br> 2. Allowed special character ._-@ and space. <br>3. Name length should be greater than one.',
                setTimeZoneErrorMsg    :'Please select Start/End date for Time zone',
                jsValidationMsg        :'1. JavaScript Condition Examples :\ncountry_code == \'USA\', time_range >= 900 && time_range <= 1800 etc.\n2. Dragging bottom-right corner of javascript condition editor(Textarea) can resizable',
				emailAddressValidationMsg  :'1. Email address should be start with alphabet / numeric / underscore / non-us characters.<br> 2. Allowed special character <b>.-@</b> .<br>3. Email address length should be greater than 9 characters.<br> 4. Email address examples : abc@de.fg, A-C@D-.FG',
                nameValidationMsg      :'Name should not start with space, it should be less than 256 characters and special characters are not allowed(except _ - and space).',
                roleNameValidationMsg :'1. Role name should be start with alphabet / numeric / underscore / non-us characters.<br> 2. Allowed special character ,._\-+/@= and space. <br>3. Name length should be greater than one.',
                policyNameValidationMsg   :'Please avoid these characters (&, <, >, \', ", `) for policy name.',
                serviceNameValidationMsg :'Service name should be less than 256 characters and special characters are not allowed (except _ and -)',
			},
			serverMsg : {

				// UserMgr
				userMgrPassword        : 'The password you\'ve provided is incorrect. Please try again with correct password',
				userMgrInvalidUser     : 'Invalid user provided',
				userMgrNewPassword     : 'Invalid new password',
				userMgrOldPassword     : ' You can not use old password.',
				userMgrEmailChange     : 'Email address cannot be changed. Please send a request to change using feedback',
				userMgrInvalidEmail    : 'Invalid email address',
				userMgrWrongPassword   : 'Password doesnot match. Please try again with proper password',
				userMgrWrongUser       : 'User access denied. User not found.',
				fsDefaultNameValidationError:"Please provide  fs.default.name in  format 'hdfs://hostname:portNumber' .",
				fsDefaultNameEmptyError:'Please provide  fs.default.name.',
				userAlreadyExistsError : 'User already exists',
				repositoryNameAlreadyExistsError  : 'Repository name already exists'
				
			},
			hintMsg : {
				yarnRestUrl            :"1.For one url, eg.<br>'http or https://&lt;ipaddr&gt;:8088'<br>2.For multiple urls (use , or ; delimiter), eg.<br>'http://&lt;ipaddr1&gt;:8088,http://&lt;ipaddr2&gt;:8088'",
				sqoopRestUrl           :"eg. 'http://&lt;ipaddr&gt;:12000'",
				hiveJDBCUrl            :"1.For Remote Mode, eg.<br>jdbc:hive2://&lt;host&gt;:&lt;port&gt;<br>2.For Embedded Mode (no host or port), eg.<br>jdbc:hive2:///;initFile=&lt;file&gt;<br>3.For HTTP Mode, eg.<br>jdbc:hive2://&lt;host&gt;:&lt;port&gt;/;<br>transportMode=http;httpPath=&lt;httpPath&gt;<br>4.For SSL Mode, eg.<br>jdbc:hive2://&lt;host&gt;:&lt;port&gt;/;ssl=true;<br>sslTrustStore=tStore;trustStorePassword=pw<br>5.For ZooKeeper Mode, eg.<br>jdbc:hive2://&lt;host&gt;/;serviceDiscoveryMode=<br>zooKeeper;zooKeeperNamespace=hiveserver2<br>6.For Kerberos Mode, eg.<br>jdbc:hive2://&lt;host&gt;:&lt;port&gt;/;<br>principal=hive/domain@EXAMPLE.COM<br>",
				hdfsNameNodeUrl		   :"1.For one Namenode Url, eg.<br>hdfs://&lt;host&gt;:&lt;port&gt;<br>2.For HA Namenode Urls(use , delimiter), eg.<br>hdfs://&lt;host&gt;:&lt;port&gt;,hdfs://&lt;host2&gt;:&lt;port2&gt;<br>"
			}
			

        }
    });
});
