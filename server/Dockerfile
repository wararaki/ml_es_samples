FROM python:3.8

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt && \
    rm -rf ~/.cache requirements.txt

COPY app /app
COPY run.sh run.sh

ENTRYPOINT [ "/bin/bash", "run.sh" ]
