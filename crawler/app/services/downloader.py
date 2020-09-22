import urllib


class Downloader:
    @classmethod
    def download(clf, url: str, filename: str):
        data = None
        try:
            with urllib.request.urlopen(url) as f:
                data = f.read()
        except urllib.error.URLError as e:
            raise e

        try:
            # TODO: 一時ファイル書き込みにしたい。
            with open(filename, mode='wb') as f:
                f.write(data)
        except Exception as e:
            raise e
