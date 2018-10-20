let array1=[1,2,3,4,5,6,7] , array2=['a','b','c','d','e','f','g'] , a , mergeArray = [] ;
//here we declare the arrays and the variables;
if (array1.length == array2.length) //this condition is to prevent the user from declaring different lenght arrays;
{
       for (let i=0 ; i < array1.length ; i++ ) //this loop is to push the elemnts to the third array;
        {

            a = array1[i];
                //container for the array's elemnts;
            mergeArray.push(a);
                //pushing the elemnts to the third array;
            a = array2[i];
                //container for the array's elemnts;
            mergeArray.push(a);
                //pushing the elemnts to the third array;
        }
    console.log('the solution is [ ' + mergeArray + ' ]' );
    // printing the solution of the merge in the terminal window;
} else {
    console.log('sorry we can do that for you');
    console.log('try again using the same length for the arrays');
}