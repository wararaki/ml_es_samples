from ..models.news import News


class Parser:
    @classmethod
    def parse(clf, filename: str, text: str) -> News:
        lines = list(map(
            lambda x: x.replace('　', '').strip(),
            filter(lambda x: x is not None or x != '', text.split('\n'))))
        url = lines[0]
        datetime_ = lines[1]
        title = lines[2]
        content = ''.join(lines[3:])
        label = filename.split('/')[1]

        return News(
            url=url,
            datetime=datetime_,
            title=title,
            content=content,
            label=label)
