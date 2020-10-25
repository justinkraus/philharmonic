// //mouseover
// let projDetails = document.getElementsByClassName("projDetails1 projDetails2 projDetails3");

// function changeOpacity(){
    
// }

// projDetails.addEventListener("mouseenter", function( event ) {   
//   // highlight the mouseenter target
//   event.target.style.color = "purple";

//   // reset the color after a short delay
//   setTimeout(function() {
//     event.target.style.color = "";
//   }, 500);
// }, false);



//random integer function
function getRandomInt(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function perfData(d, num){
            d3.selectAll('.performance' + num + 'Left')
            .text(d.workTitle + " ( " + d.dateCount + " )")

            d3.selectAll('.performance' + num + 'Right')
            .text(d.composerName)

            d3.selectAll('.performance' + num + 'BackLeft')
            .insert("span")
            // .attr("class", "performance" + num + "BackLeft")
            .text(d.workTitle + " (" + d.dateCount + ")")

            d3.selectAll('.performance' + num + 'BackRight')
            .insert("span")
            // .attr("class", "performance" + num + "BackRight")
            .text(d.composerName)

            // d3.select("body")
            // .attr("class", "performanceBack" + num + "Right")
            // .text(d.composerName + " " + d.dateCount)
            // .raise();

        }

function genData(){
//read csv and get random performances by quantile
d3.csv("works_quantile_all1.csv", function(data){

	// get quantile 1 performances
	var quantile1 = data.filter(function(d){
    return (d.quantile == 1)
	});

	// get quantile 2 performances
	var quantile2 = data.filter(function(d){
    return (d.quantile == 2)
	});

	// get quantile 3 performances
	var quantile3 = data.filter(function(d){
    return (d.quantile == 3)
	});

	//get total size of quantiles
	var length1 = quantile1.length
	var length2 = quantile2.length
	var length3 = quantile3.length

	// get random performances for quantiles
	// select random numbers within performances range
    var randoNumQ1_1 = getRandomInt(0, length1)
    var randoNumQ1_2 = getRandomInt(0, length1)
    var randoNumQ1_3 = getRandomInt(0, length1)
    var randoNumQ1_4 = getRandomInt(0, length1)
    var randoNumQ2_1 = getRandomInt(0, length2)
    var randoNumQ2_2 = getRandomInt(0, length2)
    var randoNumQ3_1 = getRandomInt(0, length3)

    //select performances from dataset
    var randoPerfQ1_1 = quantile1[randoNumQ1_1]
    var randoPerfQ1_2 = quantile1[randoNumQ1_2]
    var randoPerfQ1_3 = quantile1[randoNumQ1_3]
    var randoPerfQ1_4 = quantile1[randoNumQ1_4]
    var randoPerfQ2_1 = quantile2[randoNumQ2_1]
    var randoPerfQ2_2 = quantile2[randoNumQ2_2]
    var randoPerfQ3_1 = quantile3[randoNumQ3_1]

    // send to function to add to divs
  	perfData(randoPerfQ1_1, 1)
  	perfData(randoPerfQ1_2, 2)
  	perfData(randoPerfQ1_3, 3)
  	perfData(randoPerfQ1_4, 4)
  	perfData(randoPerfQ2_1, 5)
  	perfData(randoPerfQ2_2, 6)
  	perfData(randoPerfQ3_1, 7)

    var clickNum = ++clickNum

});}





// // get performances that match 1st quantile
// var performance1 = data.filter(function(d){
//     return (d.quantile == 1)
// });
// console.log(performance1.length)
// performance1.forEach(element => return );
// // console.log(performance1[0])
// // console.log(performance1.workTitle.toString())

// // quantile

// // getQuote: function (arr){
// //             var getIndex = Object.keys(arr)[Math.floor((Math.random() * 7000))]
// //             var getLength = arr[getIndex].length
// //             //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random used for random function
// //             function getRandomInt(min, max) {
// //             min = Math.ceil(min);
// //             max = Math.floor(max);
// //             return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
// //             }
// //             var randoQuote = getRandomInt(0, getLength)
// //             console.log(randoQuote)
// //             this.Author = getIndex
// //             this.Quote = arr[getIndex][randoQuote]
// //         },



// var data = ["Edit the code bdwdwelow to change me!"]
// // Feel free to change or delete any of the code you see in this editor!

// var div = d3.select("body").append("div")
// .attr("width", 960)
// .attr("height", 500)
// var update = function (txt) {

// var spn = div.selectAll('span').data([[txt]]);
// spn.enter()
//   .append("span")
//   .text(function(d){return d})
// }

// update(performance1)
// })