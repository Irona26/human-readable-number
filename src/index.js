module.exports = function toReadable (number) {
 let num = 
 number
    .toString();
    let result = '';
        const a = {
            1: 'one',
            2: 'two',
            3: 'three',
            4: 'four',
            5: 'five',
            6: 'six',
            7: 'seven',
            8: 'eight',
            9: 'nine',
            0: 'zero',
        };  
         const b = {
            10: 'ten',
            11: 'eleven',
            12: 'twelve',
            13: 'thirteen',
            14: 'fourteen',
            15: 'fifteen',
            16: 'sixteen',
            17: 'seventeen',
            18: 'eighteen',
            19: 'nineteen',
            20: 'twenty',   
            30: 'thirty',
            40: 'forty',
            50: 'fifty',
            60: 'sixty',
            70: 'seventy',
            80: 'eighty',
            90: 'ninety',
        };
        const c = {
            100: 'one hundred',
            200: 'two hundred',
            300: 'three hundred',
            400: 'four hundred',
            500: 'five hundred',
            600: 'six hundred',
            700: 'seven hundred',
            800: 'eight hundred',
            900: 'nine hundred',   
        };

    if (num.length === 1) {
    let num = number.toString();
    result = a[num];
    return (result); 
    }

   else if (num.length === 2 && number < 21) {
        result = b[number];
        return (result); 
    }

   else if (num.length === 2 && number > 20) {
        let num7 = number % 10; //8
        let num1 = number - num7; //50
        result = (b[num1] + " " + a[num7]);

            if (num7 === 0) {
                result = b[num1];
            };

           return (result); 
    }

   else if (num.length === 3) {
        let num4 = number % 100; 
        let num5 = number % 10;
        if (num4 > 20 && num5 > 0) {
            let num3 = number - num4; //сотни
            let num0 = num4 % 10; //единицы
            let num1 = num4 - num0; //десятки
            result = (c[num3] + " " + b[num1] + " " + a[num0]);  
        } else if (num4 === 0)   {
            let num3 = number - num4;
            result = c[num3];
        
        } else if (num4 > 20 && num5 === 0) {
            let num3 = number - num4; //сотни
            result = (c[num3] + " " + b[num4]);  

        } else if (num4 > 9 && num4 < 21) {
            let num3 = number - num4; //сотни     
            result = (c[num3] + " " + b[num4]);  

        } else if (num4 < 10) {
            let num3 = number - num4; //сотни
            result = (c[num3] + " " + a[num4]);  
        } 
        return (result);
    }
    console.log(result);
    }

