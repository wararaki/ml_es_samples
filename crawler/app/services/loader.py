import logging
import os
import tarfile
from typing import List, Tuple

logger = logging.getLogger(__name__)


class Loader:
    @classmethod    
    def load(clf, filename: str, skip_files: List[str]=None) -> Tuple[str, str]:
        if skip_files is None:
            skip_files = ['LICENSE.txt', 'README.txt', 'CHANGES.txt']

        with tarfile.open(filename) as tf:
            for member in tf.getmembers():
                if os.path.basename(member.name) in skip_files:
                    continue
                f = tf.extractfile(member)
                if f is None:
                    continue
                data = f.read()
                if data is None:
                    continue
                logger.debug('%s: %s', member.name, data.decode('utf8')[:10])
                yield member.name, data.decode('utf8')
