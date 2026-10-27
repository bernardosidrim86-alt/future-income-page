# Architecture

- Profile presentation is separated from content filtering to keep replacement profile data independent of tab interactions.
- All subscription and locked-content payment actions use the single payment adapter; it stays disconnected until a gateway is explicitly supplied.