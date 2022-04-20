import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float"
actor DBank{
  // addothogonal persistance
  stable var currentBalance: Float = 300;
  // currentBalance :=100;
  // constants  are in form of let
  let id = 3466437485;
  Debug.print("Hello canister");
  Debug.print(debug_show(currentBalance));
  Debug.print(debug_show(id));
  // the parameters should have types given in this case natutal number  is from 0->
  public func depositFunds (amount: Float){
    currentBalance +=amount;
    Debug.print(debug_show(currentBalance))
  };
  // depositFunds();
  public func withdrawFunds(amount: Float){
    if(currentBalance > amount){
      currentBalance-=amount;
      Debug.print(debug_show(currentBalance))
    }else{
      Debug.print("balance insaficient")
    };
  };
  // query calls to get altrafast queries
  public query func checkBalance(): async Float {
    return currentBalance;
  };
  stable var startTime = Time.now();
  Debug.print(debug_show(startTime));
  public func compoundIntrest(){
    let currentTime = Time.now();
    let timeElapsedNs = currentTime - startTime;
    let timeElapsedSec = timeElapsedNs/1000000000;
    currentBalance := currentBalance*(1.01**Float.fromInt(timeElapsedSec));
    startTime:=currentTime
  }
}