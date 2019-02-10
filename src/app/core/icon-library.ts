import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faPalette } from '@fortawesome/free-solid-svg-icons';

export function installFontAwesomeIcons() {
  library.add(faCheckCircle);
  library.add(faPalette);
}
