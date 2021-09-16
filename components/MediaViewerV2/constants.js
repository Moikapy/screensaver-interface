

export const MIMETYPE = {
  BMP: 'image/bmp',
  GIF: 'image/gif',
  JPEG: 'image/jpeg',
  PNG: 'image/png',
  SVG: 'image/svg+xml',
  TIFF: 'image/tiff',
  WEBP: 'image/webp',
  MP4: 'video/mp4',
  OGV: 'video/ogg',
  QUICKTIME: 'video/quicktime',
  WEBM: 'video/webm',
  GLB: 'model/gltf-binary',
  GLTF: 'model/gltf+json',
  OBJ: 'model/obj',
  FBX: 'model/fbx',
  OCT: 'application/octet-stream',
  MODEL:'',
  MP3: 'audio/mpeg',
  OGA: 'audio/ogg',
  WAV: 'audio/wav',
  XWAV: 'audio/x-wav',
  FLAC: 'audio/flac',
  PDF: 'application/pdf',
  ZIP: 'application/zip',
  ZIP1: 'application/x-zip-compressed',
  ZIP2: 'multipart/x-zip',
  MD: 'text/plain',
};

export const IPFS_DIRECTORY_MIMETYPE = 'application/x-directory';

export const ALLOWED_MIMETYPES = Object.keys(MIMETYPE)
  .map((k) => MIMETYPE[k])
  .filter((e) => e !== MIMETYPE.GLTF); // disabling GLTF from new updates

export const ALLOWED_FILETYPES_LABEL = Object.entries(MIMETYPE)
  .filter((e) => ALLOWED_MIMETYPES.includes(e[1]))
  .filter(
    (e) =>
      ![
        'ZIP1',
        'ZIP2',
        'OGA',
        'OGV',
        'BMP',
        'TIFF',
        'XWAV',
        'QUICKTIME',
        'WEBP',
      ].includes(e[0])
  )
  .map((e) => (e[0] === 'ZIP' ? 'HTML (ZIP ARCHIVE)' : e[0]))
  .join(', ');

