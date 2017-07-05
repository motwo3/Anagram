
    function doClick() {
        var string1 = document.getElementById("input1").value;
        console.log("string1 is " + string1);

        var string2 = document.getElementById("input2").value;
        console.log("string2 is " + string2);


        var string1 = string1.toLowerCase();
        var string2 = string2.toLowerCase();

        var string1Count = {};
        Array.prototype.forEach.call(string1, function (ch) {
            string1Count[ch] = string1Count [ch] ? 1 + string1Count [ch] :1;
        });

        var string2length = string2.length;
        for (var i = 0; i < string2length; i++) {
            if(!string1Count[string2[i]]) {
                alert("Not Anagram!");
                return false;
            } else {
                string1Count [string2[i]]   -= 1;
            }
        }

        alert("Anagram!");
        return true;

    }
