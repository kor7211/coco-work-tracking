```mermaid
erDiagram
    HISTORY }|--|| WORK-TYPE : describe
    HISTORY {
        int id PK
        int typeId FK
        text city "TitleCase eg.Tokyo, London"
        text uploaded "YYYY-MM-DDTHH:MM:SSZ"
        text started "YYYY-MM-DDTHH:MM:SSZ"
        int durationMinutes
        int breakMinutes
        text title
        text comment
        text image "Nullable"
    }
    
    WORK-TYPE {
        int id PK
        text name
        text description
    }
```