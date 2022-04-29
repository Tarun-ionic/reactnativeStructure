import { Alert,ToastAndroid ,Platform} from "react-native";
import Toast from 'react-native-simple-toast';
//--------------------------- Message Provider Start -----------------------
class messageFunctionsProviders {
        toast(message,position){
			if(position=='center')
			{
				Toast.showWithGravity(message, Toast.SHORT, Toast.CENTER);
		   }
			else if(position=='top')
			{
				Toast.showWithGravity(message, Toast.SHORT, Toast.TOP);
			}
			else if(position=='bottom')
			{
				Toast.showWithGravity(message, Toast.SHORT, Toast.BOTTOM);
				
			}
			else if(position=='long')
			{
				Toast.showWithGravity(message, Toast.LONG, Toast.CENTER);
		    }
			
		}
	 
	   alert(title, message, callback) {
		if(callback === false){
			Alert.alert(
				title,
				message,
				[
					{
						text: msgTitle.ok[0], 
					},
				],
				{cancelable: false},
			);
		}else{
			Alert.alert(
				title,
				message,
				[
					{
						text: msgTitle.ok[0], 
						onPress: () => callback,
					},
				],
				{cancelable: false},
			);
		}
		
       }

       confirm(title, message, callbackOk, callbackCancel) {
    	if(callbackCancel === false){
    		Alert.alert(
				title,
				message,
				[
					{
						text: msgTitle.cancel[0], 
					},
					{
						text: msgTitle.ok[0], 
						onPress: () =>  this.btnPageLoginCall(),
					},
				],
				{cancelable: false},
			);
    	}else{
    		Alert.alert(
				title,
				message,
				[
					{
						text: msgTitle.cancel[0], 
						onPress: () => callbackCancel,
					},
					{
						text: msgTitle.ok[0], 
						onPress: () => callbackOk,
					},
				],
				{cancelable: false},
			);
    	}
		
        }

      later(title, message, callbackOk, callbackCancel, callbackLater) {
		Alert.alert(
			title,
			message,
			[
				{
					text: 'Ask me later', 
					onPress: () => msgTitle.later[0],
				},
				{
					text: 'Cancel', 
					onPress: () => msgTitle.cancel[0],
				},
				{
					text: 'OK', 
					onPress: () => msgTitle.ok[0],
				},
			],
			{cancelable: false},
		);
	   }


}

//--------------------------- Title Provider Start -----------------------

class messageTitleProvider {
	//----------------- message buttons
	ok = ['Ok'];
	cancel = ['Cancel'];
	later = ['Later'];

	//--------------- message title 
	information = ['Information Message'];
	alert = ['Alert'];
	
}

//--------------------------- Message Provider Start -----------------------//

class messageTextProvider {

	//------------------ Login messages -----------------------//
	emptyName                 = ['Please enter your name'];
	emptyFirstName            = ['Please enter your first name'];
	emptyLastName             = ['Please enter your last name'];
	emptyUsername             = ['Please enter your username'];
	emptyEmail                = ['Please enter email address'];
	validEmail                = ['Please enter valid email address']
	emptyMobile               = ['Please enter mobile number'];
	lengthMobile              = ['Please enter valid mobile number'];
	emptyGender               = ['Please select your gender'];
	emptyPassword             = ['Please enter password'];
	passwordLenght            = ['Password should be of atleast 6 character']
	emptyConfirmPassword      = ['Please enter the password again'];
	matchPassword             = ['Entered password do not match'];
	emptyPostCode             = ['Please enter post code'];
	emptyOldPassword          = ['Please enter old password'];
	emptyNewPassword          = ['Please enter new password'];
	emptyPostCode             = ['Please enter post code'];
	emptyTitle                = ['Please enter title'];
	emptyDescription          = ['Please enter description'];
	emptyTag                  = ['Please select tag'];
	emptyPrice                = ['Please enter reguslar price'];
	emptyCategory             = ['Please select product category'];
	emptySubCategory          = ['Please select sub category'];
	emptyProdId               = ['Please provide product id to update this product'];
	tagAdded                  = ['Tag added successfully'];
}

export const msgText = new messageTextProvider();
export const msgTitle = new messageTitleProvider();
export const msgProvider = new messageFunctionsProviders();
//--------------------------- Message Provider End -----------------------