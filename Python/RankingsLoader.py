import requests, pymysql

mysql = {'host':'localhost', 'user':'root', 'password':'root', 'db':'cfbdb'}
con = pymysql.connect(host=mysql['host'],user=mysql['user'],password=mysql['password'],database=mysql['db'])
headers = {
    "accept": "application/json",
    "Authorization": "Bearer WXIGJhaBXf3xQfx/Ctrh4seXMLjAojnbQKhpouBKgzZYVVXydpI6jourT5YJ45sA"
}

def fetch_team_id(team_name, cur):
    sql = "SELECT id FROM teams where name_school = %s"
    args = (team_name)
    cur.execute(sql,args)
    ids = cur.fetchall()
    # print(team_name)
    # print(ids)
    return ids[0][0]

try:
    cur = con.cursor()
    print('Fetching & saving teams...')
    # Fetch every ranking, save to SQL
    endpoint = "https://api.collegefootballdata.com/rankings"
    for current_year in range(1936,2023):
        print('Current year: '+str(current_year))
        # Regular season & postseason
        for season_type in ["regular","postseason"]:
            params = { "year" : str(current_year), "seasonType" : season_type }        
            req = requests.get(endpoint, headers=headers, params=params)
            seasons = req.json()
            for s in seasons:             
                year = s['season']
                week = s['week']
                polls = s['polls']
                for p in polls:
                    poll_name = p['poll']
                    ranks = p['ranks']
                    for r in ranks:
                        postseason = 1 if season_type == "postseason" else 0
                        rank = r['rank']
                        conference = r['conference']
                        first_place_votes = r['firstPlaceVotes'] # int may be null
                        points = r['points'] # int may be null
                        team_id = fetch_team_id(r['school'],cur)

                        # if first_place_votes is None:
                        #     first_place_votes = 'NULL'
                        # if points is None:
                        #     points = 'NULL'
                        sql = "INSERT INTO rankings (team_id,year,week,postseason,poll,first_place_votes,points,conference,ranking) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s)"
                        args = (team_id,year,week,postseason,poll_name, first_place_votes,points,conference, rank)
                        cur.execute(sql,args)
        # Due to massive number of records, commit after each year as an interval
        con.commit()

except Exception:
    con.rollback()
    print("Database exception")
    raise
finally:
    con.close()