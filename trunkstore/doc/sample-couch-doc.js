var a = {
  "_id":"mip0"
  ,"_rev":"1-08e0b6c14f61f8efb5397d319a4b4d71"
  ,"account":{
    "credits":{
      "amt":"208.62"
    }
    ,"primary":"rperry@madisonip.com"
    ,"users":[
      "rperry@madisonip.com"
      ,"admin@madisonip.com"
    ]
    ,"servers":[
      {"auth":{
	 "AuthMethod":2
	 ,"AuthPassword":"somePass"
	 ,"AuthUser":"server2"
       }
       ,"ServerName":"Server 2 - Berkeley"
       ,"options":{
	 "international":0
       }
       ,"permissions":{
	 "users":[
	   "rperry@madisonip.com"
	 ]
       }
       ,"DIDs":{
	 "6085612400":{
	   "FailOver":{"type":"SIP-URI","uri":"200@mip.madisonip.com"}
	   ,"Options":{"E911":1,"PayPhoneAccess":0}
	   ,"E911_Info":{"ZIP":"53717","Address":"1234 Main St","City":"Madison","State":"WI"}
	   ,"CallerID":{"CNum":"6085612400","CName":"MadisonIP"}
	 }
       }
       ,"monitor":{
	 "email":"rperry@madisonip.com"
	 ,"pingInterval":"200"
	 ,"flap":"?"
	 ,"mediaDest":"?"
       }
       ,"enabled":1
      }
    ]
  }
};