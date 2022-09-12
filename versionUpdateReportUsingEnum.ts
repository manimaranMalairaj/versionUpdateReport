enum TypeOfversionType { major, patch, enhancement }

interface UpdatesType { name: string; releaseDate: string; bugID: string[]; features: string[]; authors: string[]; versionType: TypeOfversionType }
interface BugDetailsType { bugsID: string; Description: string }
interface VersionDetailsType { releases: UpdatesType[]; bugDetails: BugDetailsType[] }

let versionDetails: VersionDetailsType = {
    releases: [
        {
            name: "V1",
            releaseDate: "25.08.2021",
            bugID: ["#123", "#736"],
            features: ["voiceCall", "gaming"],
            authors: ["naveen", "manimaran"],
            versionType: TypeOfversionType.major
        },
        {
            name: "V2",
            releaseDate: "25.09.2021",
            bugID: ["#1M3", "#1S6"],
            features: ["security", "videoQuality"],
            authors: ["kamal", "naveen"],
            versionType: TypeOfversionType.patch
        },
        {
            name: "V3",
            releaseDate: "31.03.2022",
            bugID: ["#RT3", "#73"],
            features: ["removingBug", "calender"],
            authors: ["nandhakumar", "naveen"],
            versionType: TypeOfversionType.enhancement
        },
        {
            name: "V4",
            releaseDate: "01.04.2022",
            bugID: ["#1JI", "#787H"],
            features: ["videoQuality", "soundEffects"],
            authors: ["naveen", "ram"],
            versionType: TypeOfversionType.major
        },
        {
            name: "V5",
            releaseDate: "12.05.2022",
            bugID: ["#6DHJ7", "#DHU8"],
            features: ["videoCall", "calender"],
            authors: ["kamal", "manimaran"],
            versionType: TypeOfversionType.patch
        },],
    bugDetails: [
        { bugsID: "#123", Description: "Possibility of tapping/clicking buttons repeatedly" },
        { bugsID: "#736", Description: "Progress indicator" },
        { bugsID: "#6DHJ7", Description: "Repeated results on the list" },
        { bugsID: "#DHU8", Description: "Skipping selector on buttons" },
        { bugsID: "#1M3", Description: "Portrait/landscape orientation of the app" },
        { bugsID: "#1S6", Description: "Crash after tapping on button" },
        { bugsID: "#1JI", Description: "No error handling" },
        { bugsID: "#787H", Description: "Page layout at different screen resolutions/densities" },
        { bugsID: "#RT3", Description: "Specify the input type" },
        { bugsID: "#73", Description: "Push notifications" },
    ]
}

// Enter the details here ...

// Question : 1 , How many releases were made in "_____" ?

var year: string = "2022"                                                               // Enter the year as a string 

// Question : 2 , In which release did we have the bug "_____" ?

var yourBugID: string = "#73"                                                        // Enter the bugg ID here as a string

// Question : 3 , Who is the contributor who has worked on most of the releases?

// The name of the contributor who has worked on many no of releases will be displayed

// Question : 4 , How many releases on perticular type ? Ex : major,patch,enhancement

var versionType: TypeOfversionType = TypeOfversionType.major                                                            // Enter the type

// Question : 5 , How many times the perticular feature updates ?

var feature: string = "calender"                                                     // Enter the feature.

// *****************************************************************************************************************

// Filtering functions

var updates = versionDetails.releases
var bugs = versionDetails.bugDetails

// Function 1 : Find no of updates in a year.

function findUpdatesInYear(year: string): number {
    let final = updates.filter(element => element.releaseDate.includes(year))
    return (final.length)
}

// Function 2 : Finding the release name in which the perticular bug is arises.

function findNameOfReleaseOfABug(bugID: string): string {
    let version = updates.filter(element => element.bugID.includes(bugID))
    return version[0].name
}

// Function 3 : Finding the bug description

function findBugDescription(bugID: string): string {
    let wantedBugDetails = bugs.filter(element => element.bugsID == bugID)
    return wantedBugDetails[0].Description
}

// Function 4 : Finding the contributor name who worked more no of project than the others.

function findTheContributor(): any[] {
    let authorNames: any = []
    let list = updates.map(element => element.authors).forEach(element => element.forEach(element => authorNames.push(element)))
    let count = 1;
    let mostOften = 0;
    for (let indexOfName = 0; indexOfName < authorNames.length; indexOfName++) {
        for (let iteration = indexOfName; iteration < authorNames.length; iteration++) {
            if (authorNames[indexOfName] == authorNames[iteration])
                mostOften++;
            if (count < mostOften) {
                count = mostOften;
                var authorName = authorNames[indexOfName];
            }
        }
        mostOften = 0;
    }

    return [authorName, count]
}

// Function 5 : No of releases on perticular type. Ex : major , patch ,enhancement 

function getNoOfReleasesOfType(typeOfRelease: TypeOfversionType): number {
    let final = updates.filter(element => element.versionType == typeOfRelease)
    return final.length
}

// Function 6 : Finding how many times the perticular feature updated.

function getNoOfTimesFeatureUpdate(typeOfFeature: string): number {
    let final = updates.filter(element => element.features.includes(typeOfFeature))
    return final.length
}


let numberOfReleases = findUpdatesInYear(year)
console.log(`No of releases in the year ${year} is :`, numberOfReleases);
console.log("_____________________________________________________________________________________")

let relaseName = findNameOfReleaseOfABug(yourBugID)
console.log(`\nThe name of the release which has the bug '${yourBugID}' is :`, relaseName)
console.log(` Bug ID : ${yourBugID}`)
console.log(` Description : ${findBugDescription(yourBugID)}`)
console.log("_____________________________________________________________________________________")

let nameAndCount = findTheContributor()
console.log(`\nThe author '${nameAndCount[0]}' has worked on more no of releases, the count is "${nameAndCount[1]}"`);
console.log("_____________________________________________________________________________________")

let noOfReleasesOfType = getNoOfReleasesOfType(versionType)
console.log(`\nNo of releases of the type '${TypeOfversionType[versionType]}' is :`, noOfReleasesOfType);
console.log("_____________________________________________________________________________________")

let noOfTimes = getNoOfTimesFeatureUpdate(feature)
console.log(`\nNo of times the '${feature}' feature updated is :`, noOfTimes);
