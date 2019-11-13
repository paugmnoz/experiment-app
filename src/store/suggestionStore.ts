import { observable, action, computed } from 'mobx';

class SuggestionStore {
    @observable speciesSuggested = [
        {
            sciName: 'Sipia berlepschi',
            commonName: 'Hormiguero Colimocho',
            order: 'Passeriformes',
            family: 'Thamnophilidae',
            gender: 'Sipia',
            coincidence: 87,
            mainAudioUrl: '//www.xeno-canto.org/sounds/uploaded/FPAGKPAQYO/XC428690-Stub-tailed%20Antbird_SanCipriano_Co_1sep2017_FSchmitt.mp3',
            spectroImgUrl: './assets/Tagging/ai/colimocho-spec.jpg',
            birdPhotoUrl: './assets/birds/sipiaberlepschi.jpg',
            otherSongs: [
                {
                    audioUrl: '//www.xeno-canto.org/sounds/uploaded/BSFIBFUGKW/XC405735-Stub_tailed_Antbird_Anchicay%C3%A1_20171127_172446.mp3',
                    spectroImgUrl: './assets/Tagging/ai/colimocho-spec-2.jpg',
                    location: 'Buenaventura, Colombia',
                    owner: 'Iván Lau'
                },
                {
                    audioUrl: '//www.xeno-canto.org/sounds/uploaded/UZXDJEAXMH/XC262105-61.085.02.Stub-tailed_Antbird.mp3',
                    spectroImgUrl: './assets/Tagging/ai/colimocho-spec-3.jpg',
                    location: 'Esmeraldas, Ecuador',
                    owner: 'Olaf Jahn'
                },
                {
                    audioUrl: '//www.xeno-canto.org/sounds/uploaded/CLKPHLYUHA/MyrBer3IV.mp3',
                    spectroImgUrl: './assets/Tagging/ai/colimocho-spec-4.jpg',
                    location: 'Nariño, Colombia',
                    owner: 'Todd Mark'
                }
            ]
        }
    ];


}

export const suggestionStore = new SuggestionStore();