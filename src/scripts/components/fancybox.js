
import { Fancybox } from "@fancyapps/ui/dist/fancybox/";

export function fancyboxVideo() {
    Fancybox.bind("[data-fancybox]", {
        Html: {
            video: {
                autoplay: true,
                mute: true
            }
        },
        Youtube: {
            autoplay: 1,
            controls: 1,
            // тут важно
            modestbranding: 1,
            rel: 0
        }
    });
}
