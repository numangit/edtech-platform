const arr = [
    {
        id: 1,
        name: 'amina',
        quizMark: 55,
        assignmentMark: 550,
    },
    {
        id: 2,
        name: 'jamina',
        quizMark: 54,
        assignmentMark: 150,
    },
    {
        id: 3,
        name: 'lamina',
        quizMark: 65,
        assignmentMark: 233,
    },
    {
        id: 4,
        name: 'karina',
        quizMark: 41,
        assignmentMark: 142,
    },
    {
        id: 5,
        name: 'lamina',
        quizMark: 32,
        assignmentMark: 150,
    },
    {
        id: 6,
        name: 'samina',
        quizMark: 69,
        assignmentMark: 288,
    },
    {
        id: 7,
        name: 'narina',
        quizMark: 41,
        assignmentMark: 456,
    },
];

function leaderboardRanking(data) {
    // sort the data by total marks (quizMark + assignmentMark)
    const sortedData = data.sort((a, b) => (a.quizMark + a.assignmentMark < b.quizMark + b.assignmentMark) ? 1 : -1);

    // assign ranks to the sorted data
    let rank = 1;
    sortedData[0].rank = rank;
    for (let i = 1; i < sortedData.length; i++) {
        if (sortedData[i].quizMark + sortedData[i].assignmentMark === sortedData[i - 1].quizMark + sortedData[i - 1].assignmentMark) {
            sortedData[i].rank = rank;
        } else {
            rank++;
            sortedData[i].rank = rank;
        }
    }

    return sortedData;
}

const rankedData = leaderboardRanking(arr);
console.log(rankedData);


// This function takes in an array of objects with quizMark and assignmentMark properties, and returns the same array of objects with an added rank property. The function sorts the data by total marks (sum of quizMark and assignmentMark), and assigns ranks to the sorted data. In case of ties, the function assigns the same rank to the tied objects.

// In this example, the rankedData array contains the same objects as the arr array, but with the added rank property. You can modify the console.log statement at the end to display the output in a different format or save the rankedData array to a variable for further processing.