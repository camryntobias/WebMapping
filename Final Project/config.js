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
    theme: 'green',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'Scroll to gain an in depth look at the John Muir Trail',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: '1',
            alignment: 'left',
            hidden: false,
            title: 'Mile 0 - Backpackers Campground',
            image: './JMTPhotos/IMG_1412.jpg',
            description: `
    A quiet pine grove on the Merced River, your first taste of wilderness.<br>
    <ul>
        <li><strong>Elevation:</strong> ~4,000 ft</li>
        <li><strong>Permit:</strong> check-in & bear lockers on site</li>
        <li><strong>Water:</strong> Merced River (filter required)</li>
        <li><strong>Trail:</strong> easy graded, shaded forest</li>
    </ul>
    Next: Sunrise Camp, 6.5 mi of steady uphill.`,
            location: {
                center: [-119.56681985671841, 37.74442799139182],
                zoom: 14,
                pitch: 45,
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
            title: 'Mile 6.5 - Sunrise High Sieraa Camp',
            image: './JMTPhotos/IMG_1431.jpg',
            description: `
    After a steep climb out of the valley, you’ll crest into the high country at Sunrise Camp. Take a moment to look back at Yosemite Valley’s lush green, then peer forward to the jagged ridge lines that mark the Sierra Crest. <br>
    <ul>
            <li><strong>Elevation:</strong> ~7,400 ft</li>
            <li><strong>Water:</strong> creek taps (always filter)
            <li><strong>Trail:</strong> rock-strewn switchbacks out of Yosemite Valley</li>
    </ul>
    Next services: Tuolunme Meadows at mile 22.`, 
            location: {
                center: [-119.43238018295273, 37.7940758334673],
                zoom: 14,
                pitch: 35,
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
            title: 'Mile 22 - Lyell Canyon & Tuolumne Meadows',
            image: './JMTPhotos/IMG_1497.jpg',
            description: `
    Sunrise High Sierra Camp to Lyell Canyon. soft meadow grasses, wildflowers in summer, and the steady flow of the Lyell Fork. Pause at Tuolumne Meadows Grill for lunch on a sun-warmed deck
    <ul>
            <li><strong>Elevation:</strong> ~8,600 ft</li>
            <li><strong>Services:</strong> grill, store, post office, restrooms</li>
            <li><strong>Terrain:</strong> mostly flat with with fords</li>
            <li><strong>Water:</strong> multiple creek crossings (filter/boil)</li>
    </ul>
    Next climb: 1,800 ft gain up to Donohue Pass.`,
            location: {
                center: [-119.28996236120614, 37.84840782077943],
                zoom: 13,
                pitch: 45,
                bearing: 183
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '4',
            alignment: 'left',
            hidden: false,
            title: 'Mile 36 - Over Donohue Pass',
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
            title: 'Mile 59 - Reds Meadow Resort',
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
            title: 'Mile 74 - Lake Virginia',
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
            title: 'Mile 109 - Muir Trail Ranch',
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
            title: 'Mile 127 - McClure Meadow',
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
            title: 'Mile 141 - Muir Pass (11,955 ft)',
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
            title: 'Mile 157 - Mather Pass (12,000 ft)',
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
            title: 'Mile 172 - Pinchot Pass & Rae Lakes',
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
            title: 'Mile 192 - Forester Pass (13,200 ft)',
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
            title: 'Mile 205 - Guitar Lake',
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
            title: 'Mile 211 - Mt. Whitney Summit (14,505 ft)',
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
            title: 'Mile 222 - Whitney Portal',
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
