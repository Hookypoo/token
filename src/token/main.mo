import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Debug "mo:base/Debug";

actor Token {

    var owner: Principal = Principal.fromText("56og6-xj4au-p2nvg-3rynz-vzxiw-yx5x3-jtid7-xz3xo-nz2x4-gb7fa-hae");
    var totalSupply : Nat = 1000000000;
    var symbol : Text = "DANG";

    var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);

    balances.put(owner, totalSupply);

    public query func balanceOf(who: Principal) : async Nat {

        let balance : Nat = switch (balances.get(who)) {
            case null 0;
            case (?result) result;
        };

        return balance;
    };

    public query func getSymbol() : async Text {
        return symbol;
    };

    public shared(msg) func payOut() : async Text {
       // Debug.print(debug_show(msg.caller));
       if(balances.get(msg.caller) == null) {
            let amount = 10000;
            balances.put(msg.caller, amount);
            return "success";
       }else {
           " Already Claimed"
       }
        
    };

};