updates = 
[
    {
        name : "V1",
        releaseDate : "25.08.2021",
        bugID : ["#123","#736"],
        features : ["voiceCall","gaming"],
        authors : ["naveen","manimaran"],
        type : "major"
    },
    {
        name : "V2",
        releaseDate : "25.09.2021",
        bugID : ["#1M3","#1S6"],
        features : ["security","videoQuality"],
        authors : ["kamal","manimaran"],
        type : "patch"
    },
    {
        name : "V3",
        releaseDate : "31.03.2022",
        bugID : ["#RT3","#73"],
        features : ["removingBug","calender"],
        authors : ["nandhakumar","ram"],
        type : "enhancement"
    },
    {
        name : "V4",
        releaseDate : "01.04.2022",
        bugID : ["#1JI","#787H"],
        features : ["videoQuality","soundEffects"],
        authors : ["naveen","manimaran"],
        type : "major"
    },
    {
        name : "V5",
        releaseDate : "12.05.2022",
        bugID : ["#6DHJ7","#DHU8"],
        features : ["videoCall","calender"],
        authors : ["kamal","ram"],
        type : "patch"
    },
    {
        name : "V6",
        releaseDate : "31.06.2022",
        bugID : ["#DG334","#DS73"],
        features : ["inbiltMap","GPS"],
        authors : ["nandhakumar","vishnu"],
        type : "enhancement"
    },
    {
        name : "V7",
        releaseDate : "23.07.2022",
        bugID : ["#RD4T3","#7F3"],
        features : ["interface","appstoreUpdate"],
        authors : ["manimaran","ram"],
        type : "patch"
    },
]

// How many releases were made in 2022 ?

function findUpdatesInYear(year){
    final = updates.filter(element => element.releaseDate.includes(year))
    console.log(`No of releases in the year ${year} is :`,final.length);
}

findUpdatesInYear("2022")

// In which release did we have the bug #787H?

function findNameOfRelease(bugID){
    updates.forEach(element => {
        if (element.bugID.includes(bugID)){
            console.log(`\nThe name of the release which has the bug '${bugID}' is :`,element.name)
        }
    })
}

findNameOfRelease("#787H")

// Who is the contributor who has worked on most of the releases?

function findTheContributor(){
    authorNames =[]
    list = updates.map(element => element.authors).forEach(element => element.forEach(element => authorNames.push(element)))
    mostFrequent = 1;
    m = 0;
    for (i = 0; i < authorNames.length; i++) {
        for (j = i; j < authorNames.length; j++) {
            if (authorNames[i] == authorNames[j])
                m++;
            if (mostFrequent < m) {
                mostFrequent = m;
                authorName = authorNames[i];
            }
        }
        m = 0;
    }
    console.log(`\nThe author '${authorName}' has worked on more no of releases, the count is "${mostFrequent}"`);
}
findTheContributor()

// How many patch release?

function getNoOfReleasesOfType(typeOfRelease){
    final = updates.filter(element => element.type.includes(typeOfRelease))
    console.log(`\nNo of releases of the type ${typeOfRelease} is :`,final.length);
}

getNoOfReleasesOfType("major")

// How many times the perticular feature updates ?

function getNoOfTimesFeatureUpdate(typeOfFeature){
    final = updates.filter(element => element.features.includes(typeOfFeature))
    console.log(`\nNo of times the '${typeOfFeature}' feature updated is :`,final.length);
}

getNoOfTimesFeatureUpdate("removingBug")
