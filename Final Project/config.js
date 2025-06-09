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
    footer: `
        Source: <a
            href="https://www.hikingproject.com/trail/7016162/john-muir-trail-jmt"
            target="_blank"
        >
            Trail and Elevation Data
            </a><br>
        Images: All images are sourced from personal photography
        <br>
        Created using <a 
            href="https://github.com/mapbox/storytelling" 
            target="_blank">Mapbox Storytelling
            </a> template.`,
    chapters: [
        {
            id: '1',
            alignment: 'left',
            hidden: false,
            title: 'Mile 0 - Backpackers Campground',
            image: 'IMG_1412.jpg',
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
            image: 'IMG_1431.jpg',
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
            image: 'IMG_1497.jpg',
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
            image: 'IMG_1553.jpg',
            description: `
    This is your first real taste of high-altitude trial by granite: Donohue Pass at 10,000 ft. The last few hundred feet are a scramble across steep slabs, but the payoff is a breathtaking panorama of Tioga Pass country.
    <ul>
            <li>><strong>Elevation Gain:</strong> ~1,800 ft from Lyell Canyon</li>
            <li><strong>Terrian: exposed granite slabs & talus fields</strong></li>
            <li>No water for 5 mi after summit (carry extra)</li>
    </ul>
    Next camp: basin just east of pass.`,
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
            image: 'IMG_1585.jpg',
            description: `
    Reds Meadow is a true oasis - hot showers, clean laundry, resupply packages, and bustling trail camaraderie. Spend an afternoon lounging by the river, refill your water bottles at the Ranger station, and maybe even indulge in a milkshake before heading back into the backcountry.
    <ul>
            <li><strong>Elevationn:</strong> ~5,400 ft</li>
            <li><strong>Services:</strong> resupply packages, food, laundry, showers</li>
            <li><strong>Water:</strong> potable on site</li>
    </ul>
    Next: climb back into high country toward Lake Virginia.`,
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
            image: 'IMG_1608.jpg',
            description: `
    Crystal-clear Lake Virginia sits like a jewel amid granite walls. Camp on its sandy shores and watch the mountains reflect at dawn. It’s the first real feeling that you’ve left civilization behind.
    <ul>
            <li><strong>Elevation:</strong> ~10,000 ft</li>
            <li><strong>Campsites:</strong> sandy beaches & boudler pads</li>
            <li><strong>Water:</strong> Lake, inlet/outlet streams (filter/boil)</li>
            <li>Beware mosquitoes at dawn/dusk</li>
    </ul>`,
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
            image: 'IMG_1632.jpg',
            description: `
    A rustic ranch offering mail drops and a rare chance to dump trash.
    <ul>
            <li><strong>Elevation:</strong> ~7,200 ft</li>
            <li><strong>Services:</strong> resuppy, trash drop. USPS box</li>
            <li>No free drinking water - purchase or filter creek water</li>
    </ul>`,
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
            image: 'IMG_0197.jpeg',
            description: `
    McClure Meadow. Tough climb out of Muir Trail Ranch, especially if your backpack is freshly heavy and full from resupply.
    <ul>
            <li><strong>Elevation:</strong> ~8,500 ft</li>
            <li><strong>Water:</strong> plentiful creeks (filter/boil)</li>
            <li><strong>Fishing:</strong> bring a lightweight rod</li>
            <li><strong>Terrain: meadows give way to rock talus</strong></li>
    </ul>`,
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
            title: 'Mile 141 - Muir Pass',
            image: 'IMG_0202.jpeg',
            description: `
    Muir Pass is the heart of this hike - home to the John Muir Memorial Shelter. At nearly 12,000 ft you’ll feel the thin air, taste the snowmelt, and appreciate the humbling vastness of the John Muir Wilderness.
    <ul>
            <li><strong>Elevation:</strong> 11,955 ft</li>
            <li><strong>Shelter:</strong> stone hut (no amenities)</li>
            <li>Snow may linger - microspikes can help in early season</li>
    </ul>  
            `,
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
            title: 'Mile 157 - Mather Pass',
            image: 'IMG_1786.jpg',
            description: `
    Arguably the toughest obstacle: Mather Pass. The final approach kicks up loose scree and steep slabs, then grants sweeping views. Camp at Majorie Lake below.
    <ul>
            <li><strong>Elevation:</strong> ~12,000 ft</li>
            <li><strong>Terrain:</strong> unstrable scree. use trekking poles</li>
            <li><strong>Campsites:</strong> secure spots at nearby lakes</li>
    </ul>`,
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
            image: 'IMG_0201.jpg',
            description: `
    Over Pinchot pass and camp at Rae Lakes. 
    <ul>
            <li><strong>Pass Elevation:</strong> ~12,100ft -> <strong>Rae Lakes:</strong> ~10,100 ft</li>
            <li>Terraced camps at each lake outlet</li>
            <li>Crowded in high season - arrive early for best tent spots</li>
            <li><strong>Water:</strong> filter lake water</li>
    </ul>
    `,

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
            title: 'Mile 192 - Forester Pass',
            image: 'IMG_1827.jpg',
            description: `
    The highest pass on the JMT — Forester Pass — is an exposed knife-edge of granite. Winds can roar, snow may linger, but once over the summit the rugged granitic canyons and rushing rivers spread out.
    <ul>
            <li><strong>Elevation:</strong> 13,200 ft</li>
            <li>Terrain: narrow granite rideg, windy - stay alert!</li>
            <li><strong>Next water:</strong> Tyndall Creek</li>
    </ul>
            `,
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
            image: 'IMG_0204.jpeg',
            description: `
    Guitar Lake, named for its shoreline’s shape, is the last true campsite before Mt. Whitney. Chilly nights, early mornings, and the prospect of the continent’s tallest peak ahead make this a campsite you’ll never forget.
    <ul>
            <li><strong>Elevation:</strong> ~11,600 ft</li>
            <li><strong>Water:</strong> small creek inlet and lake water (filter/boil)</li>
            <li><strong>Camps:</strong> small beach area and rocky slabs - bring warm gear</li>
            <li><strong>Summit Bid:</strong> begin pre-dawn from here</li>
    </ul>`,
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
            title: 'Mile 211 - Mt. Whitney Summit',
            image: 'IMG_1907.jpg',
            description: `
    Summit of Mt. Whitney, the highest mountain in the contiguous United States and the official end point of the JMT. The final push to the summit is a test of grit—2,000 ft of elevation gain over rough trail and talus fields. At the top, you’ll sign the summit register, and feel the triumphant rush of accomplishment.
    <ul>
            <li><strong>Elevation:</strong> 14,505 ft</li>
            <li>Sign the summit register, savor the view</li>
            <li>Watch for altiude symptoms; hydrate thouroughly</li>
    </ul>`,
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
            image: 'IMG_1942.jpg',
            description: `
    The descent to Whitney Portal completes the journey: switchbacks through pines, the roar of Lone Pine Creek, and finally the trailhead’s bustle of cars, shuttle buses, and ice-cold drinks. You’ve hiked the length of the Sierra—and you’re forever changed.
    <ul>
            <li><strong>Elevation:</strong> ~8,360 ft</li>
            <li><strong>Amenities: parking lot, restrooms, water, & the Whitney Portal Store</strong></li>
            <li>Shuttle back to Lone Pine (arrange in advance) or hitch a ride</li>
            <li>Congratulations - your thru-hike is complete!</li>
    </ul>`,
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
