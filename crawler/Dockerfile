FROM python:3.8

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt && \
    rm -rf ~/.cache requirements.txt

WORKDIR /crawler
COPY app /crawler/app
COPY run.sh /crawler/run.sh
COPY mapping.json /crawler/mapping.json

ENTRYPOINT [ "/bin/bash", "run.sh" ]
