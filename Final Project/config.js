var config = {
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiY2FtcnludG9iaWFzIiwiYSI6ImNtYXgxZjh4ajBsbXIybW9pb2c2bG1kZHgifQ.1oeSSJBN-0IQkruHJz7C2g',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'Mapping the John Muir Trail',
    subtitle: 'The ins and outs of thru-hiking the spectacular Eastern Sierra Mountains',
    byline: 'By Camryn Tobias',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        /*
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'San Francisco',
            image: './assets/san-fran.jpeg',
            description: 'The first chapter contains a title, image, and camera view for San Francisco, California. Update the chapter data to make it your own.',
            location: {
                center: [-122.418398, 37.759483],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'sky',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: [
                {
                    layer: 'sky',
                    opacity: 0
                }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Washington, D.C.',
            image: './assets/washington-dc.jpg',
            description: 'The second chapter flies to Washington, D.C., updates the camera pitch, and slowly rotates. <br>  <br> Washington, D.C., the capital of the United States, is a vibrant city known for its iconic landmarks, including the White House, the U.S. Capitol, and the Washington Monument. It serves as the political heart of the nation and a center for history, culture, and international diplomacy.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        */
        {
            id: '1',
            alignment: 'left',
            hidden: false,
            title: 'Mile 0',
            image: './JMTPhotos/IMG_1412.jpg',
            description: 'Arrive at the Backpackers Campground in Yosemite National Park.',
            location: {
                center: [-119.56681985671841, 37.74442799139182],
                zoom: 14,
                pitch: 55,
                bearing: 180,
                speed: 1,
                //curve: 1.5, 
                //easing: t => t
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '2',
            alignment: 'left',
            hidden: false,
            title: 'Mile 6.5',
            image: './JMTPhotos/IMG_1431.jpg',
            description: 'Happy Isles to Sunrise High Sierra Camp. Get on the trail early to avoid the crowds in the park. The climb out of the valley is grueling but sets a nice tone for the journey that awaits. In addition to the JMT permit, it is possible to acquire a permit for Half Dome. While it is not on the trail, summiting Half Dome is extremely worth while.',
            location: {
                center: [-119.43238018295273, 37.7940758334673],
                zoom: 14,
                pitch: 75,
                bearing: 182,
                speed: 1,
                //curve: 1.5,
                //asing: t => t
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '3',
            alignment: 'left',
            hidden: false,
            title: 'Mile 22',
            image: './JMTPhotos/IMG_1497.jpg',
            description: 'Sunrise High Sierra Camp to Lyell Canyon. Have lunch at the Tuolumne Meadows Grill.',
            location: {
                center: [-119.28996236120614, 37.84840782077943],
                zoom: 13,
                pitch: 45,
                bearing: 183
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '4',
            alignment: 'left',
            hidden: false,
            title: 'Mile 36',
            image: './JMTPhotos/IMG_1553.jpg',
            description: 'Lyell Canyon over Donohue Pass. Donohue Pass is thr first major pass at 10,000 ft.',
            location: {
                center: [-119.21172115361357, 37.7434239389048],
                zoom: 13,
                pitch: 45,
                bearing: 185
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '5',
            alignment: 'left',
            hidden: false,
            title: 'Mile 59',
            image: './JMTPhotos/IMG_1585.jpg',
            description: 'Reds Meadow Resort. Resupply food, wash clothes, and take a shower.',
            location: {
                center: [-119.07497021228784, 37.61942660081634],
                zoom: 13,
                pitch: 45,
                bearing: 188
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '6',
            alignment: 'left',
            hidden: false,
            title: 'Mile 74',
            image: './JMTPhotos/IMG_1608.jpg',
            description: 'Lake Virginia.',
            location: {
                center: [-118.93520169854978, 37.515789933863346],
                zoom: 13,
                pitch: 45,
                bearing: 190
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '7',
            alignment: 'left',
            hidden: false,
            title: 'Mile 109',
            image: './JMTPhotos/IMG_1632.jpg',
            description: 'Muir Trail Ranch, resupply food and properly dispose of trash.',
            location: {
                center: [-118.8813932802017, 37.2379557629022],
                zoom: 13,
                pitch: 45,
                bearing: 192
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '8',
            alignment: 'left',
            hidden: false,
            title: 'Mile 127',
            image: './JMTPhotos/IMG_0197.jpeg',
            description: 'McClure Meadow. Tough climb out of Muir Trail Ranch, especially if your backpack is freshly heavy and full from resupply.',
            location: {
                center: [-118.74170341975324, 37.18668242879487],
                zoom: 13,
                pitch: 45,
                bearing: 194
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '9',
            alignment: 'left',
            hidden: false,
            title: 'Mile 141',
            image: './JMTPhotos/IMG_0202.jpeg',
            description: 'Muir Pass at 11,955 ft., on the top of the pass is a John Muir Memorial Shelter, in the case of an unexpected weather event.',
            location: {
                center: [-118.67048982743975, 37.111972141006675],
                zoom: 13,
                pitch: 45,
                bearing: 196
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '10',
            alignment: 'left',
            hidden: false,
            title: 'Mile 157',
            image: './JMTPhotos/IMG_1786.jpg',
            description: 'Over Mather Pass at 12,0000 ft. arguably that hardest pass on the trail. Camp at Lake Marjorie',
            location: {
                center: [-118.42915868612923, 36.94574645939778],
                zoom: 13,
                pitch: 45,
                bearing: 198
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '11',
            alignment: 'left',
            hidden: false,
            title: 'Mile 172',
            image: './JMTPhotos/IMG_0201.jpg',
            description: 'Over Pinchot pass at 12,100 ft. and camp at Rae Lakes.',
            location: {
                center: [-118.40052973246995, 36.8102792205875],
                zoom: 13,
                pitch: 45,
                bearing: 200
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '12',
            alignment: 'left',
            hidden: false,
            title: 'Mile 192',
            image: './JMTPhotos/IMG_1827.jpg',
            description: 'Over Foresters pass at 13,200 ft., the highest mountain pass on the John Muir Trail. Camp at Tyndall Creek.',
            location: {
                center: [-118.38502982950367, 36.63504350708706],
                zoom: 13,
                pitch: 45,
                bearing: 202
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '13',
            alignment: 'left',
            hidden: false,
            title: 'Mile 205',
            image: './JMTPhotos/IMG_0204.jpeg',
            description: 'Guitar Lake. Last Camp sight on the John Muir Trail.',
            location: {
                center: [-118.31501696659642, 36.57112958200143],
                zoom: 13,
                pitch: 45,
                bearing: 204
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },   
        {
            id: '14',
            alignment: 'left',
            hidden: false,
            title: 'Mile 211',
            image: './JMTPhotos/IMG_1907.jpg',
            description: 'Summit of Mt. Whitney 14,505 ft., highest mountain in the contiguous United States and the official end point of the JMT.',
            location: {
                center: [-118.29213666941982, 36.57860298708489],
                zoom: 13,
                pitch: 45,
                bearing: 206
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },   
        {
            id: '15',
            alignment: 'left',
            hidden: false,
            title: 'Mile 222',
            image: './JMTPhotos/IMG_1942.jpg',
            description: 'Whitney Portal. Finally off the trail.',
            location: {
                center: [-118.24013307501761, 36.586772545750364],
                zoom: 13,
                pitch: 45,
                bearing: 208
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }  
    ]
};
